export default function Join() {
    
    return (<>
            <h1>회원가입</h1>
            <form action="/send-data-here" method="post">
                <label htmlFor="user_email">User Email:</label>
                <input type="text" id="user_email" name="user_email"/>

                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" required minLength={4} maxLength={20}/>

                <label htmlFor="user_name">User Name:</label>
                <input type="text" id="user_name" name="user_name" required minLength={4} maxLength={20} />

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone"  required minLength={4} maxLength={20} />

                <label htmlFor="birth">Birth:</label>
                <input type="text" id="birth" name="birth" />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" />

                <label htmlFor="job">Job:</label>
                <input type="text" id="job" name="job" />

                <label htmlFor="user_interests">User Interests:</label>
                <input type="text" id="user_interests" name="user_interests" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
