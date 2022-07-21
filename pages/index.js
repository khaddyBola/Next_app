import Link from "next/link";
import styles from '../styles/Home.module.scss';

const Homepage = () => {
  return ( 
    <div className="content">
      <h1 className={styles.title}>Welcome to NextJs App</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deserunt laudantium necessitatibus quisquam numquam deleniti earum iusto sit,
        ad recusandae, est dicta autem similique harum veritatis aut id illo vero sunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deserunt laudantium necessitatibus quisquam numquam deleniti earum iusto sit,
        ad recusandae, est dicta autem similique harum veritatis aut id illo vero sunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deserunt laudantium necessitatibus quisquam numquam deleniti earum iusto sit,
        ad recusandae, est dicta autem similique harum veritatis aut id illo vero sunt.
      </p>
      <Link href="/admin"><a className={styles.btn}>See Admin List</a></Link>
    </div>
  );
}
 
export default Homepage;
