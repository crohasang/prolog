import { useEffect, useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import { useMutation } from '@tanstack/react-query';
import instance from '../../apis/instance';

interface Props {
  value: string;
  onChange: (e: string) => void;
}

Quill.register('modules/imageDrop', ImageDrop);

const WritingEditor: React.FC<Props> = ({ value, onChange }) => {
  const toolbarOptions = [
    ['image', 'link'],
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'background',
    'color',
    'link',
    'image',
    'video',
    'width',
  ];

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
      },
      imageDrop: true,
    }),
    []
  );

  // const quillRef = useRef(null);
  // const quillRef = useRef<InstanceType<typeof Quill> | null>(null);
  const quillRef = useRef<ReactQuill | null>(null);

  // base64 이미지를 전송해서 response로 url을 받는 mutation
  const imageMutation = useMutation({
    mutationFn: async (newData: FormData) => {
      return await instance.post('', newData);
    },
    onSuccess: (res) => {
      return res.data;
    },
  });

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      console.log(quill);

      const handleImageUpload = async (file: File) => {
        const range = quill.getSelection(true);

        // 로딩 이미지 삽입
        quill.insertEmbed(
          range.index,
          'image',
          'src/assets/images/loading.png'
        );

        try {
          const formData = new FormData();
          formData.append('file', file);

          // 서버에 formData POST하고 response로 img url 받아오기 -> result에 있음
          const url = await imageMutation.mutate(formData);
          console.log(url);

          quill.deleteText(range.index, 1);
          quill.insertEmbed(range.index, 'image', url);
          quill.setSelection({ index: range.index + 1, length: 0 });
        } catch (e) {
          quill.deleteText(range.index, 1);
        }
      };

      const handleImage = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
          if (input.files !== null && quill !== null) {
            const file = input.files[0];
            handleImageUpload(file);
          }
        };
      };

      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('image', handleImage);
    }
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      className="w-full h-4/5"
    />
  );
};

export default WritingEditor;
