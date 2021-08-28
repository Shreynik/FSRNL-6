function loginUserFlow(board) {

    const loginUserInput = document.getElementById('user-login');
  
    const loginUserSubmit = document.getElementById('user-login-submit');
    loginUserSubmit.addEventListener('click', () => {
      if (loginUserInput.value !== '') {
        board.loginUser(loginUserInput.value);
      }
    })
  
  }