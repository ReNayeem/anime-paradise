import '../css/footer.css'

export default function Footer() {

  const today = new Date();
  const year = today.getFullYear();

  return <>
    <h6 className="text-center footer-style">&copy; Anime Paradise {year}. All rights reserved to Mahadi & Nayeem.</h6>
  </>;
}
