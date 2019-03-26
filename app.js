const log = m => {
  m ? console.log(m) : null;
};

log("hi");

// data=['alpha','beta','charlie','def','eight','india']
// data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
data = [
  1,
  2,
  3,
  4,
  5,
  // 6,
  // 7,
  // 8,
  // 9,
  // 11,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22
];
d = [];
const a = data => {
  data = data.sort((a, b) => a - b);
  log(data.length);
  // see if it is a multiple of 4
  // get the rows count
  row = Math.ceil(data.length / 4);
  log(`Max Row count is ${row}`);

  log(`Matrix is ${row * 4}`);
  var emptyColCt = row * 4 - data.length;
  var filledColCt = 4 - emptyColCt;
  // log(`Empty column = ${(row*4)-data.length}`)
  // log(`Filled column = ${4-((row*4)-data.length)}`)
  log(`emptyColCt = ${emptyColCt}`);
  log(`filled Col Ct = ${filledColCt}`);

  while (filledColCt) {
    filledColCt -= 1;
    d.push(data.splice(0, row));
    // log(d)
  }

  while (emptyColCt) {
    emptyColCt -= 1;
    //decrement row here, because we are working on partial columns
    d.push(data.splice(0, row - 1));
    // log(d)
  }
  // log(d);

  //Transpose
  for (i = 0; i < row; i++) {
    log([d[0][i], d[1][i], d[2][i], d[3][i]].join(" | "));
  }

  // for (i = 0; i < 4; i++) {
  //    for (j = 0; j < d[i].length; j++) {
  //     log(d[0][i],d[1][i],d[2][i],d[3][i] );
  //   }
  // }
  // for (x in d) {
  //   for (c in d[x]){
  //     log(d[x][c])
  //   }
  // }
  // i = row;
  // st = 0;
  // master = data;
  // //take 2
  // // before splice check if there are enuf to fill 4 cols

  // data = master.splice(st, i);
  // d = [];
  // log(data);

  // //push
  // log("----");
  // d.push(data);
  // log(d);
  // log(master);
  // log(master.length);
  // log(d.length);
  // // Do I have 9 elements available (12-3 = 9 )
  // // Do i have 8-2 = 6 items
  // if (master.length >= (row * 3)) {
  //   log(`we have more than ${row * 3}`);
  //   data = master.splice(st, row);
  //   log(data);
  //   d.push(data);
  //   log(d);
  //   log(master);
  //   log(master.length);
  //   while (master.length) {
  //     log("cutting further");
  //     data = master.splice(st, row);
  //     log(data);
  //     d.push(data);
  //     log(d);
  //     log(master);
  //     log(master.length);
  //   }
  // } else {
  //   log(`we dont have ${row * 3}`);
  //   log("decrement row");
  //   row -= 1;
  //   log(`Row is now ${row}`);
  //   //   slice
  //   data = master.splice(st, row);
  //   log(data);
  //   d.push(data);
  //   log(d);
  //   log(master);
  //   log(master.length);
  //   while (master.length) {
  //     log("cutting further");
  //     data = master.splice(st, row);
  //     log(data);
  //     d.push(data);
  //     log(d);
  //     log(master);
  //     log(master.length);
  //   }
  // }
  //   log("----");
  //   data = master.splice(st, i);
  //   log(data);
  //   d.push(data);
  //   log(d);
  //   log(d.length);
  //   log("----");
  //   data = master.splice(st, i);
  //   log(data);
  //   d.push(data);
  //   log(d);
  //   log(d.length);
  //   log("----");
  //   data = master.splice(st, i);
  //   log(data);
  //   d.push(data);
  //   log(d);
  //   log(d.length);
};

a(data);
