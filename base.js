
            function validateForm(event) {
                event.preventDefault();
                // Reset error messages
                document.getElementById('userError').innerHTML = '';
                document.getElementById('passwordError').innerHTML = '';

                
                var username = document.getElementById('user').value;
                var password = document.getElementById('password').value;

                
                if (username.trim() === '') {
                    document.getElementById('userError').innerHTML = 'Username is required';
                    document.getElementById
                    
                }

               
                if (password.trim() === '') {
                    document.getElementById('passwordError').innerHTML = 'Password is required'; 
                    
                }

                
            }
       