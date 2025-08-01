document.addEventListener('DOMContentLoaded', () => {
    document.getElementById ('contactForm').addEventListener ('submit', async function (e) {
        e.preventDefault()

        const name = document.getElementById('name').value 
        const email = document.getElementById('email').value 

        const response = await fetch ('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name,
                email
            })
            
        })

        const data = await response.json()
        alert (`Data inserted with ID: ${data.id}`)

    })
})