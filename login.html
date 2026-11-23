import { supabase } from './supabase.js'

const formLogin = document.querySelector('#form-login')
const mensagemErro = document.querySelector('#mensagem-erro')

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    mensagemErro.textContent = 'A processar login...'
    mensagemErro.style.color = 'blue'
    mensagemErro.style.display = 'block'

    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: senha,
        })

        if (error) {
            mensagemErro.textContent = 'Erro: ' + error.message
            mensagemErro.style.color = 'red'
        } else {
            mensagemErro.textContent = 'Login com sucesso! A redirecionar...'
            mensagemErro.style.color = 'green'
            setTimeout(() => {
                window.location.href = 'dashboard.html'
            }, 1000)
        }
    } catch (err) {
        mensagemErro.textContent = 'Erro de rede ou conexão: ' + err.message
        mensagemErro.style.color = 'red'
    }
})
