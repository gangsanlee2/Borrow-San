export default function RemoveUser() {
    
    return (<>
            <h1>탈퇴</h1>
            <form action="/send-data-here" method="post">
                
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" required minLength={4} maxLength={20}/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
