
  const usernameTextField = document.getElementById('username')
  const adduserBtn = document.getElementById('addUser')
  // data set in html table
  const recordsDisplay = document.getElementById('records')

  //data store
  let userArray=[];

  //data get localstorage
  let objstr =localStorage.getItem('user')
  //console.log(objstr)

  if(objstr !=null){
    userArray=JSON.parse(objstr) // string convert oject    
  }
  //console.log(userArray)
  displayData()


  adduserBtn.onclick =()=>{
     const name = usernameTextField.value;
     //alert(name)

     userArray.push({'name':name});
     //console.log(userArray);
     saveData(userArray)
     usernameTextField.value ="";
  }

  function saveData(userArray)
  {
    let str =JSON.stringify(userArray)  //string me change krne k liye JSON.stringify ka use krte hai
    //console.log(str)
    localStorage.setItem('user',str) //string formate
    displayData()


  }
  function displayData()
  {
    let data =''
    userArray.forEach((user,i)=>{
      // console.log(user)
      data += `<tr>
      <td>${i+1}</td>
      <td>${user.name} </td>
      <td>
      <i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i>
      <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i>
      </td>

      </tr>`;

    })
    //console.log(data)

    recordsDisplay.innerHTML = data;
  }
