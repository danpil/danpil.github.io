export const SortInfo = {
  columns: [
    {
      colName: 'units',
      sort: 'Asc',
      funcSort: function(arr) {
        if (this.sort === 'Desc') {
          arr.sort(function(a, b) {
            return a.units - b.units;
          });
        } else {
          arr.sort(function(a, b) {
            return b.units - a.units;
          });
        }
      },
    },
    {
      colName: 'price',
      sort: 'Asc',
      funcSort: function(arr) {
        if (this.sort === 'Desc') {
          arr.sort(function(a, b) {
            return a.price - b.price;
          });
        } else {
          arr.sort(function(a, b) {
            return b.price - a.price;
          });
        }
      },
    },
    {
      colName: 'title',
      sort: 'Desc',
      funcSort: function(arr) {
        if (this.sort === 'Asc') {
          arr.sort(function(a, b) {
            return a.title.localeCompare(b.title);
          });
        } else {
          arr.sort(function(a, b) {
            return -a.title.localeCompare(b.title);
          });
        }
      },
    },
  ],
};

export const getSortColByName = (cols, name) => {
  for (var i = 0; i < cols.length; i++) {
    if (cols[i].colName === name) {
      return cols[i];
    }
  }
  return null;
};

export const resetSort = (cols, name) => {
  for (var i = 0; i < cols.length; i++) {
    if (cols[i].colName !== name) {
      cols[i].sort = '';
    }
  }
};
