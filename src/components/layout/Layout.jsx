import s from './Layout.module.scss';
// TODO sækja Sass

export function Layout({ title, children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>{title}</h1>
      </header>
      <main className={s.layout__main}>
        {children}
        <hr></hr>
      </main>
      <footer className={s.layout__footer}>
        <p>Fréttir frá <a href="http://www.ruv.is">RÚV</a>.</p>
      </footer>
    </div>
  )
}
