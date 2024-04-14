import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <section className={css.container}>
      <h2>Phone book</h2>
      {children}
    </section>
  );
}