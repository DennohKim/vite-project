function Footer() {
  return (
    <footer className="movie__footer">
      <div className="container flex justify-between">
        <p>
          Copyright
          {new Date().getFullYear()}
        </p>
        <p className="movie__footer-developer">
          GitHuib:
          {' '}
          <a href="https://github.com/mamba-dev-KE" target="_blank" rel="noreferrer">
            mamba-dev-KE
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
