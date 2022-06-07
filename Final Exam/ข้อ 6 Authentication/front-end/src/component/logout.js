function Logout() {
    const token = localStorage.getItem('token')

    if(token) {
        localStorage.removeItem('token')
        window.location.href="/"
    }
    return (
     <></>
    )
}
export default Logout;