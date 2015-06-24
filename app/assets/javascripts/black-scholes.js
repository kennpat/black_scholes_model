function BlackScholes(S, X, T, r, v)
{
  var PutCallFlag = "c"
  var answer = 0.00;
  var d1, d2;
  d1 = (Math.log(S / X) + (r + v * v / 2.0) * T) / (v * Math.sqrt(T));

  d2 = d1 - v * Math.sqrt(T);

  if (PutCallFlag == "c"){
    answer = S * CND(d1)-X * Math.exp(-r * T) * CND(d2);
  }
  //Unused portion of formula for put options. May build out in future.
  else
  {
    answer = X * Math.exp(-r * T) * CND(-d2) - S * CND(-d1);
  }
  document.getElementById("result").value = answer
}

function CND(x){

  var a1, a2, a3, a4 ,a5, k ;

  a1 = 0.31938153, a2 =-0.356563782, a3 = 1.781477937, a4= -1.821255978 , a5= 1.330274429;

  if(x<0.0)
    return 1-CND(-x);
  else
    k = 1.0 / (1.0 + 0.2316419 * x);
  return 1.0 - Math.exp(-x * x / 2.0)/ Math.sqrt(2*Math.PI) * k
    * (a1 + k * (a2 + k * (a3 + k * (a4 + k * a5)))) ;

}
