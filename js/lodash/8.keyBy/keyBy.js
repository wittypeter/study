var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
  ];

  const _ = {
      keyBy(array, transformKey) {
          return array.reduce((prev, cur) => {
              prev[transformKey(cur)] = cur;
              return prev;
          }, {});
      }
  }
   
  const ans = _.keyBy(array, function(o) {
    return String.fromCharCode(o.code);
  });

  console.log(ans);
  // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
   