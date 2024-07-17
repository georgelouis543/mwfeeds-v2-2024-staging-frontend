import React, { useState, useEffect} from 'react';
import axios from 'axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const SetitemForm = (props) => {
    const axiosPrivate = useAxiosPrivate()
    const [formData, setFormData] = useState({
        item_list: props.items_arr,
        is_rss_feed: props.isRssfeed,
        item_literal_before: '',
        item_literal_after: '',
        title_tag: '',
        title_class: '',
        title_id: '',
        title_attrib: '',
        title_literal_before: '',
        title_literal_after: '',
        title_regex: '',
        title_scope: 'item',
        source_name_tag: '',
        source_name_class: '',
        source_name_id: '',
        source_name_attrib: '',
        source_name_literal_before: '',
        source_name_literal_after: '',
        source_name_regex: '',
        source_name_scope: 'item',
        source_url_tag: '',
        source_url_class: '',
        source_url_id: '',
        source_url_attrib: '',
        source_url_literal_before: '',
        source_url_literal_after: '',
        source_url_regex: '',
        source_url_scope: 'item',
        item_url_tag: '',
        item_url_class: '',
        item_url_id: '',
        item_url_attrib: '',
        item_url_literal_before: '',
        item_url_literal_after: '',
        item_url_regex: '',
        item_url_scope: 'item',
        date_tag: '',
        date_class: '',
        date_id: '',
        date_attrib: '',
        date_literal_before: '',
        date_literal_after: '',
        date_regex: '',
        date_scope: '',
        date_format: '',
        description_tag: '',
        description_class: '',
        description_id: '',
        description_attrib: '',
        description_literal_before: '',
        description_literal_after: '',
        description_regex: '',
        description_scope: 'item',
        reach_tag: '',
        reach_class: '',
        reach_id: '',
        reach_attrib: '',
        reach_literal_before: '',
        reach_literal_after: '',
        reach_regex: '',
        reach_scope: 'item',
        RemoveDuplicates: true,
        RemoveDuplicatesField: '',
        timezone_field: '',
      });

      useEffect(() => {
        setFormData({
            ...formData,
            item_list: props.items_arr,
            is_rss_feed: props.isRssfeed,
            // Get item_list and is_rss_feed data from main create feed form
        });
    }, [props.items_arr, props.isRssfeed]);

      console.log(props.items_arr)
      console.log(props.isRssfeed)
      console.log(formData)
      
    
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
          const response = await axiosPrivate.post('/feed_handler/view_parsed_items', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.status === 200) {
            console.log('Success:', response.data);
            props.onChangesetItemForm(response.data, formData)
          } else {
            console.error('Error:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    
      return (
    <form className="justify-between Items-center w-[60%] py-7 border-black" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6 h-[380px] overflow-auto ">
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_literal_before"
                id="item_literal_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               Pre Item Literal
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_literal_after"
                id="item_literal_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Item Literal
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="title_tag"
                id="title_tag"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.title_tag}
                onChange={handleChange}
              />
              <label
                htmlFor="title_tag"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="title_class"
                id="title_class"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.title_class}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title Class
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="title_id"
                id="title_id"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.title_id}
                onChange={handleChange}
              />
              <label
                htmlFor="title_id"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="title_attrib"
                id="title_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.title_attrib}
                onChange={handleChange}
              />
              <label
                htmlFor="title_attrib"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title Attrib
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="title_literal_before"
                id="title_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.title_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="title_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pre Title Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="title_literal_after"
                id="title_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.title_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="title_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Title Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-0 group">
              <input
                type="text"
                name="title_regex"
                id="title_regex"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.title_regex}
                onChange={handleChange}
              />
              <label
                htmlFor="title_regex"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title Regex 
              </label>
            </div>
            <select
          name="title_scope"
          id="title_scope"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.title_scope}
          onChange={handleChange}
        >
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <label
          htmlFor="title_scope"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title Scope
        </label>   
        <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_name_tag"
                id="source_name_tag"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_name_tag}
                onChange={handleChange}
              />
              <label
                htmlFor="source_name_tag"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source Name Tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_name_class"
                id="source_name_class"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_name_class}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source Name Class
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_name_id"
                id="source_name_id"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_name_id}
                onChange={handleChange}
              />
              <label
                htmlFor="source_name_id"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source Name ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_name_attrib"
                id="source_name_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_name_attrib}
                onChange={handleChange}
              />
              <label
                htmlFor="source_name_attrib"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source Name Attrib
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_name_literal_before"
                id="source_name_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_name_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="source_name_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pre Source Name Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_name_literal_after"
                id="source_name_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_name_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="source_name_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Source Name Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-0 group">
              <input
                type="text"
                name="source_name_regex"
                id="source_name_regex"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_name_regex}
                onChange={handleChange}
              />
              <label
                htmlFor="source_name_regex"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source Name Regex 
              </label>
            </div>
            <select
          name="source_name_scope"
          id="source_name_scope"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.source_name_scope}
          onChange={handleChange}
        >
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <label
          htmlFor="source_name_scope"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Source Name Scope
        </label>  
        <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_url_tag"
                id="source_url_tag"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_url_tag}
                onChange={handleChange}
              />
              <label
                htmlFor="source_url_tag"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source URL tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_url_class"
                id="source_url_class"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_url_class}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source URL Class
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_url_id"
                id="source_url_id"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_url_id}
                onChange={handleChange}
              />
              <label
                htmlFor="source_url_id"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source URL ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_url_attrib"
                id="source_url_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_url_attrib}
                onChange={handleChange}
              />
              <label
                htmlFor="source_url_attrib"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source URL Attrib
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_url_literal_before"
                id="source_url_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_url_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="source_url_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pre Source URL Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="source_url_literal_after"
                id="source_url_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_url_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="source_url_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Source URL Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-0 group">
              <input
                type="text"
                name="source_url_regex"
                id="source_url_regex"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.source_url_regex}
                onChange={handleChange}
              />
              <label
                htmlFor="source_url_regex"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Source URL Regex 
              </label>
            </div>
            <select
          name="source_url_scope"
          id="source_url_scope"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.source_url_scope}
          onChange={handleChange}
        >
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <label
          htmlFor="source_url_scope"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Source URL Scope
        </label>  
        <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_url_tag"
                id="item_url_tag"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_url_tag}
                onChange={handleChange}
              />
              <label
                htmlFor="item_url_tag"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Item URL tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_url_class"
                id="item_url_class"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_url_class}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Item URL Class
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_url_id"
                id="item_url_id"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_url_id}
                onChange={handleChange}
              />
              <label
                htmlFor="item_url_id"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Item URL ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_url_attrib"
                id="item_url_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_url_attrib}
                onChange={handleChange}
              />
              <label
                htmlFor="item_url_attrib"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Item URL Attrib
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_url_literal_before"
                id="item_url_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_url_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="item_url_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pre Item URL Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="item_url_literal_after"
                id="item_url_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_url_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="item_url_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Item URL Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-0 group">
              <input
                type="text"
                name="item_url_regex"
                id="item_url_regex"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.item_url_regex}
                onChange={handleChange}
              />
              <label
                htmlFor="item_url_regex"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Item URL Regex 
              </label>
            </div>
            <select
          name="item_url_scope"
          id="item_url_scope"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.item_url_scope}
          onChange={handleChange}
        >
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <label
          htmlFor="item_url_scope"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Item URL Scope
        </label>
        <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="date_tag"
                id="date_tag"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.date_tag}
                onChange={handleChange}
              />
              <label
                htmlFor="date_tag"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="date_class"
                id="date_class"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.date_class}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date Class
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="date_id"
                id="date_id"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.date_id}
                onChange={handleChange}
              />
              <label
                htmlFor="date_id"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="date_attrib"
                id="date_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.date_attrib}
                onChange={handleChange}
              />
              <label
                htmlFor="date_attrib"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date Attrib
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="date_literal_before"
                id="date_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.date_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="date_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pre Date Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="date_literal_after"
                id="date_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.date_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="date_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Date Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-0 group">
              <input
                type="text"
                name="date_regex"
                id="date_regex"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.date_regex}
                onChange={handleChange}
              />
              <label
                htmlFor="date_regex"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date Regex 
              </label>
            </div>
            
            {/* <select
          name="date_scope"
          id="date_scope"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.date_scope}
          onChange={handleChange}
        >
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <label
          htmlFor="date_scope"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Date Scope
        </label> */}
        <div className="relative w-full pt-2">
        <select
          name="date_scope"
          id="date_scope"
          className="block text-[11px] appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={formData.date_scope}
          onChange={handleChange}
        >
          <option value="" disabled selected hidden>Date Scope</option>
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
        </div>
      </div>
      <label
        htmlFor="date_scope"
        className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:left-3 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 transition-all duration-300"
      >
        Date Scope
      </label>



        <div className="relative w-full pt-2">
        <select
          name="date_format"
          id="date_format"
          className="block text-[11px] appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={formData.date_scope}
          onChange={handleChange}
        >
          <option value="">Date Format</option>
          <option value="unix">UNIX/EPOCH</option>
          <option value="current">Current</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
        </div>
      </div>
      <label
        htmlFor="date_format"
        className="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:left-3 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 transition-all duration-300"
      >
        Date Format
      </label>

        <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="description_tag"
                id="description_tag"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description_tag}
                onChange={handleChange}
              />
              <label
                htmlFor="description_tag"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="description_class"
                id="description_class"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description_class}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description Class
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="description_id"
                id="description_id"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description_id}
                onChange={handleChange}
              />
              <label
                htmlFor="description_id"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="description_attrib"
                id="description_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description_attrib}
                onChange={handleChange}
              />
              <label
                htmlFor="description_attrib"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description Attrib
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="description_literal_before"
                id="description_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="description_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pre Description Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="description_literal_after"
                id="description_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="description_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Description Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-0 group">
              <input
                type="text"
                name="description_regex"
                id="description_regex"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description_regex}
                onChange={handleChange}
              />
              <label
                htmlFor="description_regex"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description Regex 
              </label>
            </div>
            <select
          name="description_scope"
          id="description_scope"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.description_scope}
          onChange={handleChange}
        >
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <label
          htmlFor="description_scope"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Description Scope
        </label>

        <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="reach_tag"
                id="reach_tag"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.reach_tag}
                onChange={handleChange}
              />
              <label
                htmlFor="reach_tag"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reach tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="reach_class"
                id="reach_class"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.reach_class}
                onChange={handleChange}
              />
              <label
                htmlFor="item_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reach Class
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="reach_id"
                id="reach_id"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.reach_id}
                onChange={handleChange}
              />
              <label
                htmlFor="reach_id"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reach ID
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="reach_attrib"
                id="reach_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.reach_attrib}
                onChange={handleChange}
              />
              <label
                htmlFor="reach_attrib"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reach Attrib
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="reach_literal_before"
                id="reach_attrib"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.reach_literal_before}
                onChange={handleChange}
              />
              <label
                htmlFor="reach_literal_before"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pre Reach Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="reach_literal_after"
                id="reach_after"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.reach_literal_after}
                onChange={handleChange}
              />
              <label
                htmlFor="reach_literal_after"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Post Reach Literal 
              </label>
            </div>
            <div className="relative z-0 w-full mb-0 group">
              <input
                type="text"
                name="reach_regex"
                id="reach_regex"
                className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.reach_regex}
                onChange={handleChange}
              />
              <label
                htmlFor="reach_regex"
                className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reach Regex 
              </label>
            </div>
            <select
          name="reach_scope"
          id="reach_scope"
          className="block py-2.5 px-0 w-full text-[11px] text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.reach_scope}
          onChange={handleChange}
        >
          <option value="item">Item</option>
          <option value="document">Document</option>
        </select>
        <label
          htmlFor="reach_scope"
          className="peer-focus:font-medium absolute text-[11px] text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Reach Scope
        </label>
          </div>


          <button
            type="submit"
            className="text-white bg-black mt-3 hover:bg-gray-700 focus:outline-none focus:ring-black font-medium rounded-lg text-[11px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-black"
          >
            View Items
          </button>
        </form>
      )
}

export default SetitemForm
