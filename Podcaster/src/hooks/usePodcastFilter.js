import { useState } from 'react';

function usePodcastFilter(data, fieldsToFilter) {
  const [filterText, setFilterText] = useState('');
  console.log("filter",data,fieldsToFilter)
  const filteredData = data.filter(item => {
    for (let field of fieldsToFilter) {
      console.log("filter", field, item)
      const fieldValue = item[field].toLowerCase();
      if (fieldValue && fieldValue.includes(filterText.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  return {
    filteredData,
    handleFilterTextChange,
    filterText,
  };
}

export default usePodcastFilter;
