import { Counter } from '../app/features/counter';

const Popup = () => {
  document.body.className = 'w-[30rem] h-[15rem] flex items-center justify-center';

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mb-4">どの言語に翻訳しますか？</p>
        <select
          name="target_lang"
          className="form-select mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="EN">英語</option>
          <option value="KO">韓国語</option>
          <option value="ZH">中国語</option>
          <option value="JA">日本語</option>
        </select>
      </div>
      {/* <Counter /> */}
    </div>
  );
};

export default Popup;
