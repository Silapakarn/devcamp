function Logout() {
    const token = localStorage.getItem('token')

    if(token) {
        localStorage.removeItem('token')
        window.location.href="/"
    }
    return (
        <h3>You are now logged out.....</h3>
    )
}

export default Logout;