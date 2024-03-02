import { useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';

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

  const quillRef = useRef(null);

  // useEffect(() => {
  //   const quill = quillRef.current;
  //   console.log(quill);

  // const handleImage = () => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();

  //   input.onchange = async () => {
  //     const file = input.files[0];
  //     const range = quill.getSelection(true);

  //     // 대체 이미지 넣기
  //     // quill.insertEmbed(range.index, "image", `/images/loading.gif`);

  //     try {
  //       const formData = new FormData();
  //       formData.append('file', file);
  //       // 서버에 formData POST하고 response로 img url 받아오기 -> result에 있음

  //       const url = result.data;
  //       console.log(url);

  //       quill.deleteText(range.index, 1);
  //       quill.insertEmbed(range.index, "image", url);
  //       quill.setSelection(range.index + 1);
  //     } catch (e) {
  //       quill.deleteText(range.index, 1);
  //     }
  //   };
  // };

  // if (quill) {
  //   const toolbar = quill.getModule("toolbar");
  //   toolbar.addHandler("image", handleImage);
  //   };
  // }, []);

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
