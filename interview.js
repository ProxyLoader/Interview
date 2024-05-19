function generateTriangle(i) {
    let triangle = '';
    for (let j = 1; j <= i; j++) {
      triangle += '*'.repeat(j) + '\n';
    }
    return triangle;
  }
  
  console.log(generateTriangle(15));