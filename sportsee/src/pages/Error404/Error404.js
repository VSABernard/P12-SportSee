import { Link } from "react-router-dom"
import '../Error404/Error404.css'

/**
 * Component React that displays the page Error 404
 * @component 
 */
function Error404() {
  return (
    <div> 
        <section className="error-section">
            <h1 className="error-title">404</h1>
            <p className="error-content">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/">                                                       {/* Link to Homepage */}
                <p className="error-link">Retourner sur la page d’accueil</p>
            </Link>
        </section>
    </div>
  )
}

export default Error404