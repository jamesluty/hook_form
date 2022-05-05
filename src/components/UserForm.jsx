import React, {useState} from 'react'
import styles from './styles.module.css'

const UserForm = () => {

    const [firstName, setFirstName] = useState="";
    const [lastName, setLastName] = useState="";
    const [email, setEmail] = useState="";
    const [password, setPassword] = useState="";
    const [confirmPassword, setConfirmPassword] = useState=""

    const updateInfo = (input) => {

    }

    return (
        <div className={styles.center}>
            <form className={styles.column} onSubmit={updateInfo}>
                <div className={styles.inputs}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={ (input) => setFirstName(input.target.value)} />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={ (input) => setLastName(input.target.value)} />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={ (input) => setEmail(input.target.value)} />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={ (input) => setPassword(input.target.value)} />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" onChange={ (input) => setConfirmPassword(input.target.value)} />
                </div>
            </form>
            <p className={styles.textAlign}>Your Form Data</p>
            <div className={styles.middle}>
                <p>First Name: </p>
                <p>Last Name: </p>
                <p>Email: </p>
                <p>Password: </p>
                <p>Confirm Password: </p>
            </div>
        </div>
    )
}

export default UserForm