import React from 'react';

function Login() {
  return (
    <div></div>
  );
}

export default Login;


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './index.scss'
//
// function Login () {
//   let [dogImgURL, setDogImgURL] = useState('')
//   let [accountInputValue, setAccountInputValue] = useState('')
//   let [passwordInputValue, setPasswordInputValue] = useState('')
//   let [isShowAccountErrorText, setIsShowAccountErrorText] = useState(false)
//   let [isShowPasswordErrorText, setIsShowPasswordErrorText] = useState(false)
//   let members = [
//     { account: 'yufu123', password: 'yufu123456789' },
//     { account: 'sular123', password: 'sular123456789' },
//     { account: 'xixi123', password: 'xixi123456789' },
//     { account: 'abc123', password: 'abc123456789' },
//   ]
//   useEffect(() => {
//     axios.get('https://dog.ceo/api/breeds/image/random')
//       .then((res) => {
//         setDogImgURL(res.data.message)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])
//
//   function verifyLogin () {
//     if (accountInputValue.length < 5) {
//       setIsShowAccountErrorText(true)
//     }
//     if (passwordInputValue.length < 5) {
//       setIsShowPasswordErrorText(true)
//     }
//     members.forEach((e) => {
//       if (e.account === accountInputValue && e.password === passwordInputValue) {
//         setIsShowAccountErrorText(false)
//         setIsShowPasswordErrorText(false)
//         window.open('http://localhost:3000/index')
//
//       } else if (e.account === accountInputValue && e.password !== passwordInputValue) {
//         setIsShowAccountErrorText(false)
//         setIsShowPasswordErrorText(true)
//
//       } else if (e.account !== accountInputValue && e.password === passwordInputValue) {
//         setIsShowAccountErrorText(true)
//         setIsShowPasswordErrorText(false)
//
//       } else {
//         setIsShowAccountErrorText(true)
//         setIsShowPasswordErrorText(true)
//       }
//     })
//   }
//
//   return (
//     <div className="login">
//       <div className="login-container">
//         <p>渔夫宠物店</p>
//         <div className="img-container">
//           <img src={dogImgURL} alt="载入中..."/>
//         </div>
//         <div className={'login-panel'}>
//
//           <div>账号:<input
//             onChange={(e) => {
//               console.log(e.target.value, accountInputValue)
//               setAccountInputValue(e.target.value)
//             }}
//             value={accountInputValue}
//             type="text"/>
//             {isShowAccountErrorText && <span className="input-error">账号有误</span>}
//           </div>
//           <div>密码:<input
//             onChange={(e) => {
//               setPasswordInputValue(e.target.value)
//             }}
//             value={passwordInputValue}
//             type="password"/>
//             {isShowPasswordErrorText && <span className="input-error">密码有误</span>}
//           </div>
//           <div>
//             <button>注册</button>
//             <button onClick={verifyLogin}
//             >登入
//             </button>
//
//           </div>
//           <a href={'https://www.google.com/'}>忘记账号?</a>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default Login
