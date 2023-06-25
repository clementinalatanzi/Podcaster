import { useState } from 'react';

function usePodcastFilter(data, fieldsToFilter) {
  const [filterText, setFilterText] = useState('');

  const filteredData = data.filter(item => {
    for (let field of fieldsToFilter) {
      const fieldValue = item[field]?.label.toLowerCase();
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
