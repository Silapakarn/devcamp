function Logout() {
    const token = localStorage.getItem('token')

    if(token) {
        localStorage.removeItem('token')
        window.location.href="/"
    }
    return (
        <h2>we are logging you out...</h2>
    )
}

export default Logout;