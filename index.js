var katzDeli = []; 
function takeANumber(katzDeli, name) {
 katzDeli.push(`${name}`);
 return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli) {
  if (katzDeli.length > 0) {
    return "Currently serving katzDeli[1]";
  }
  else
    return "There is nobody waiting to be served!";
}



  