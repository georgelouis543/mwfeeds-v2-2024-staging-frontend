import React, { useState} from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Createfeedform = (props) => {

  const [formData, setFormData] = useState({
    url: '',
    is_rss_feed: false,
    item_tag: '',
    item_class: '',
    item_id: '',
    item_attrib: '',
    item_regex: '',
    javascript_enabled: false
  });

  const axiosPrivate = useAxiosPrivate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivate.post('/feed_handler/view_html_items', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        console.log('Success:', response.data);
        props.onChangeCreateFeedform(response.data.results[0].pretty_html, response.data.results[1].items_raw, formData)
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
<form className="justify-between Items-center w-[60%] py-7 border-black" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="url"
          id="url"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.url}
          onChange={handleChange}
        />
        <label
          htmlFor="url"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          URL
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="is_rss_feed"
              checked={formData.is_rss_feed}
              onChange={handleChange}
              className="form-checkbox accent-orange-500"
            />
            <span className="ml-2 text-[11px]">Is RSS Feed</span>
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="javascript_enabled"
            checked={formData.javascript_enabled}
            onChange={handleChange}
            className="form-checkbox accent-orange-500"
          />
          <span className="ml-2 text-[11px]">Enable Javascript</span>
        </label>
      </div>
      </div>
      
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="item_tag"
          id="item_tag"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.item_tag}
          onChange={handleChange}
        />
        <label
          htmlFor="item_tag"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Item Tag
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="item_class"
            id="item_class"
            className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formData.item_class}
            onChange={handleChange}
          />
          <label
            htmlFor="item_class"
            className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Item Class
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="item_id"
            id="item_id"
            className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formData.item_id}
            onChange={handleChange}
          />
          <label
            htmlFor="item_id"
            className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Item ID
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="item_attrib"
            id="item_attrib"
            className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formData.item_attrib}
            onChange={handleChange}
          />
          <label
            htmlFor="item_attrib"
            className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Item Attribute
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="item_regex"
            id="item_regex"
            className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formData.item_regex}
            onChange={handleChange}
          />
          <label
            htmlFor="item_regex"
            className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Item Regex
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-black font-medium rounded-lg text-[11px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-black"
      >
        Preview HTML
      </button>
    </form>
  )
}

export default Createfeedform
