let myImage = document.querySelector('img');

myImage.onclick = function() 
                            {
                              let mySrc = myImage.getAttribute('src');
                              if(mySrc === 'images/firefoxwin10.jpg') 
                              {
                                myImage.setAttribute ('src','images/foxbrowser.jpg');
                              } 
                              else if(mySrc === 'images/foxbrowser.jpg')
                              {
                                 myImage.setAttribute ('src','images/foxlogo.jpg');
                              }
                              else if(mySrc === 'images/foxlogo.jpg')
                              {
                                 myImage.setAttribute ('src','images/firefoxlogo.jpg');
                              }
                              else if(mySrc === 'images/firefoxlogo.jpg')
                              {
                                 myImage.setAttribute ('src','images/foxlogo2.jpg');
                              }
                              else if(mySrc === 'images/foxlogo2.jpg')
                              {
                                 myImage.setAttribute ('src','images/foxonline.jpg');
                              }
                              else 
                              {
                                 myImage.setAttribute ('src','images/firefoxwin10.jpg');
                              }
                            }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1'); 

function setUserName() 
                      {
                        let myName = prompt('Please enter your name.');
                        if(!myName) 
                        {
                           setUserName();
                        }
                        else 
                        {
                          localStorage.setItem('name', myName);
                          myHeading.innerHTML = 'Mozilla is cool, ' + myName;
                        }
                      }


if(!localStorage.getItem('name')) 
{
  setUserName();
}
else 
{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {  setUserName(); }                           