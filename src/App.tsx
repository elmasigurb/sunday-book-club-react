import { FormEvent, useState } from 'react'
import { ArrowDownRight, ArrowRight, CalendarDays, Clock3, Heart, Instagram, MapPin } from 'lucide-react'

type Book = { title: string; author: string; genre: string; rating: string; cover: string }

const books: Book[] = [
  { title: 'A Room of One’s Own', author: 'Virginia Woolf', genre: 'Essay', rating: '4.7', cover: 'cover-room' },
  { title: 'The Summer Book', author: 'Tove Jansson', genre: 'Fiction', rating: '4.8', cover: 'cover-summer' },
  { title: 'Kitchen', author: 'Banana Yoshimoto', genre: 'Novel', rating: '4.6', cover: 'cover-kitchen' },
  { title: 'Blue Nights', author: 'Joan Didion', genre: 'Memoir', rating: '4.5', cover: 'cover-blue' },
]

function Flower({ className = '' }: { className?: string }) {
  return <span className={`flower ${className}`} aria-hidden="true"><i /><i /><i /><i /><i /><b /></span>
}

function Logo() {
  return <a className="logo" href="#home" aria-label="Sunday Book Club home"><span>Sunday</span><small>Book Club</small></a>
}

function Navbar() {
  return <header className="navbar">
    <Logo />
    <nav aria-label="Main navigation">
      <a href="#home">Home</a><a href="#this-month">This Month</a><a href="#shelves">Reviews</a><a href="#meetings">Meetings</a><a href="#about">About</a>
    </nav>
    <a className="button button-small button-burgundy" href="#join">Join the Club <ArrowRight size={16} /></a>
  </header>
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span /> Read together, every month</p>
      <h1>GOOD BOOKS.<br/><em>BETTER</em> SUNDAYS.</h1>
      <p className="hero-intro">A book club for slow Sundays, good stories and even better conversations.</p>
      <div className="hero-actions"><a className="button button-burgundy" href="#join">Join the Club <ArrowRight size={18}/></a><a className="text-link" href="#this-month">See this month’s book <ArrowDownRight size={18}/></a></div>
      <div className="hero-note"><span className="avatar-stack"><b>AM</b><b>EL</b><b>+50</b></span><p><strong>52 readers</strong><br/>already turning pages</p></div>
    </div>
    <div className="hero-art">
      <div className="sun-sticker">SLOW<br/>SUNDAY<br/><Heart size={18} fill="currentColor"/></div>
      <div className="image-frame"><img src={`${import.meta.env.BASE_URL}sunday-still-life.png`} alt="Retro illustration of colorful books, a reading lamp, flower and teacup" /></div>
      <Flower className="hero-flower" />
      <span className="sparkle sparkle-one">✦</span><span className="sparkle sparkle-two">✦</span>
    </div>
  </section>
}

function BookCover({ variant, compact = false }: { variant: string; compact?: boolean }) {
  return <div className={`book-cover ${variant} ${compact ? 'compact' : ''}`}>
    <div className="cover-art" />
    <div className="cover-words">
      {variant === 'cover-featured' ? <><span>THE</span><strong>VANISHING<br/>HALF</strong><small>BRIT BENNETT</small></> : null}
      {variant === 'cover-room' ? <><strong>A ROOM<br/>OF ONE’S<br/>OWN</strong><small>VIRGINIA WOOLF</small></> : null}
      {variant === 'cover-summer' ? <><strong>THE<br/>SUMMER<br/>BOOK</strong><small>TOVE JANSSON</small></> : null}
      {variant === 'cover-kitchen' ? <><strong>KITCHEN</strong><small>BANANA YOSHIMOTO</small></> : null}
      {variant === 'cover-blue' ? <><strong>BLUE<br/>NIGHTS</strong><small>JOAN DIDION</small></> : null}
    </div>
  </div>
}

function FeaturedBook() {
  return <section className="featured section" id="this-month">
    <div className="section-kicker"><span>01</span><p>This month’s pick</p></div>
    <div className="featured-layout">
      <div className="featured-cover-wrap"><span className="round-label">OCTOBER<br/>READ</span><BookCover variant="cover-featured" /><span className="mini-star">★</span></div>
      <div className="featured-copy">
        <h2>Book of<br/><em>the Month</em></h2>
        <div className="genre-line"><span>Fiction</span><span>Historical</span><span>Family</span></div>
        <h3>The Vanishing Half</h3>
        <p className="author">by Brit Bennett</p>
        <p className="description">A beautifully layered story about twin sisters, identity, and all the choices that shape our lives. The kind of book you finish and immediately need to talk about.</p>
        <div className="rating-row"><span className="stars">★★★★★</span><strong>4.8</strong><span>club rating</span></div>
        <a className="button button-orange" href="#join">Read with us <ArrowRight size={18}/></a>
      </div>
    </div>
  </section>
}

function BookCard({ book, index }: { book: Book; index: number }) {
  return <article className="book-card">
    <div className="book-index">0{index + 1}</div>
    <BookCover variant={book.cover} compact />
    <div className="book-meta"><span className="pill">{book.genre}</span><span className="small-rating">★ {book.rating}</span></div>
    <h3>{book.title}</h3><p>{book.author}</p>
  </article>
}

function Shelves() {
  return <section className="shelves section" id="shelves">
    <div className="shelves-heading"><div><p className="eyebrow"><span /> The reading list</p><h2>Currently on<br/><em>our shelves</em></h2></div><p>Four stories we’re reading, rereading, and passing around the group chat.</p></div>
    <div className="book-grid">{books.map((book, index) => <BookCard key={book.title} book={book} index={index}/>)}</div>
  </section>
}

function MeetingCard() {
  return <section className="meeting section" id="meetings">
    <div className="meeting-top"><span>Next up</span><span className="meeting-rule"/><span>Sunday gathering no. 24</span></div>
    <div className="meeting-main">
      <div className="meeting-date"><p>OCT</p><strong>18</strong><span>SUNDAY</span></div>
      <div className="meeting-title"><p className="eyebrow light"><span/> Mark your calendar</p><h2>Come for the books.<br/><em>Stay for the cake.</em></h2><p>We’ll be chatting about <strong>The Vanishing Half</strong>, over coffee, cake and very strong opinions.</p></div>
      <div className="meeting-details"><p><Clock3/> <span><small>TIME</small>14:00–16:00</span></p><p><MapPin/> <span><small>WHERE</small>Sunday Studio<br/>Reykjavík</span></p><button className="button button-lime">Save my spot <CalendarDays size={18}/></button></div>
    </div>
    <Flower className="meeting-flower"/><span className="meeting-spark">✦</span>
  </section>
}

const reviews = [
  { name: 'Anna', initials: 'A', book: 'The Summer Book', text: '“Quiet, tender and a little strange — exactly my kind of Sunday read.”', color: 'pink' },
  { name: 'Freyja', initials: 'F', book: 'Kitchen', text: '“I came for the food, stayed for the grief, and cried on the bus home.”', color: 'lime' },
  { name: 'Lilja', initials: 'L', book: 'Blue Nights', text: '“Didion made us argue for forty minutes. Five stars for the discussion alone.”', color: 'orange' },
]

function ReviewCard({ review, index }: { review: typeof reviews[number]; index: number }) {
  return <article className={`review-card ${review.color}`}>
    <span className="quote-mark">“</span><p className="review-text">{review.text}</p>
    <div className="review-book">On <em>{review.book}</em></div>
    <div className="reviewer"><span className="review-avatar">{review.initials}</span><div><strong>{review.name}</strong><span>Club member #{17 + index * 14}</span></div><span className="stars">★★★★★</span></div>
  </article>
}

function Reviews() {
  return <section className="reviews section">
    <div className="review-heading"><p className="eyebrow"><span/> Notes from the margins</p><h2>What the club<br/><em>is saying</em></h2></div>
    <div className="review-grid">{reviews.map((review, index) => <ReviewCard key={review.name} review={review} index={index}/>)}</div>
  </section>
}

function JoinSection() {
  const [status, setStatus] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget); const name = String(data.get('name') || 'reader').trim(); setStatus(`Welcome to the club, ${name}! Check your inbox for the next chapter.`); event.currentTarget.reset()
  }
  return <section className="join section" id="join">
    <div className="join-copy"><p className="eyebrow"><span/> Pull up a chair</p><h2>Your next favourite<br/>book is <em>waiting.</em></h2><p>Join Sunday Book Club for monthly reads, cozy meetups and very strong opinions about fictional people.</p></div>
    <form onSubmit={submit} className="join-form"><label><span>Your name</span><input name="name" required placeholder="Jane Austen" /></label><label><span>Email address</span><input name="email" type="email" required placeholder="jane@pemberley.com" /></label><button className="button button-burgundy">Join the Club <ArrowRight size={18}/></button>{status && <p className="form-success" role="status">{status}</p>}</form>
    <span className="join-burst">READ<br/>WITH<br/>US!</span><Flower className="join-flower"/>
  </section>
}

function Footer() {
  return <footer id="about"><div className="footer-main"><Logo/><p>For good stories, slow Sundays<br/>and better conversations.</p><div className="footer-links"><a href="#home">Home</a><a href="#this-month">This Month</a><a href="#meetings">Meetings</a></div><div className="footer-social"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a><a href="https://goodreads.com" target="_blank" rel="noreferrer">Goodreads ↗</a><a href="mailto:hello@sundaybookclub.is">Contact ↗</a></div></div><div className="footer-bottom"><span>© 2026 Sunday Book Club</span><span>Made with books & biscuits in Reykjavík</span><a href="#home">Back to top ↑</a></div></footer>
}

export default function App() {
  return <><Navbar/><main><Hero/><FeaturedBook/><Shelves/><MeetingCard/><Reviews/><JoinSection/></main><Footer/></>
}
