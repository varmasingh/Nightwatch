/**
 * Simple example of custom command. This command will
 * check if there's a onbeforeunload handler in the target web page
 * and return the result
 */
/* global window */

module.exports.command = function(Hex) {
  //var self = this;
var c;
  this.waitForElementVisible('.button.button--edit', 4000,function(result)
  {
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))
    {
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
         Hex = 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)'
     
    }
    throw new Error('Bad Hex');    
  });
  return this;
};
