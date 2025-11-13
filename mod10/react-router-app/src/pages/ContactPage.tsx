import { useNavigate } from "react-router-dom"


function ContactPage() {
    const navigate = useNavigate();

    return (
        <main>
            <h1>Contact Page</h1>

            <button onClick={() => navigate(-1) }>Go Back</button>
        </main>
    )
}


export default ContactPage