import styles from "../../styles/Nest.module.scss"


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(path => {
        return {
            params: {
                id: path.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}


const AdminUser = ({data}) => {
    return ( <>
        <h1 className={styles.title}>Admin Details</h1>
        <h2 className={styles.header}>name: {data.name}</h2>
        <h3 className={styles.header}>city: {data.city}</h3>
        <p className={styles.header}>email: {data.email}</p>
        <p className={styles.header}>phone: {data.phone}</p>
    </> );
}
 
export default AdminUser;