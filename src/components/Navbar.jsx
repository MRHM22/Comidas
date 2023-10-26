

export const Navbar = () => {

    return (
        <div className="navbar navbar-dark bg-primary mb-4 px-4">
            <span className="navbar-brand">
                <i className="fas fa-home-alt"></i>
                &nbsp;
                Inicio
            </span>

            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" />
                <button class="btn btn-success" type="submit">
                <i className="fas fa-search"></i>
                </button>
            </form>
            <button className="btn btn-warning" >
                <i className="fas fa-star"></i>
                &nbsp;
                <span>Favoritos</span>
            </button>
        </div>
    )
}
