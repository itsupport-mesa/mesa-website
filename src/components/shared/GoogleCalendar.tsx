export function GoogleCalendar() {
  return (
    <div className="w-full">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&src=aXRzdXBwb3J0QG1lc2FtYWRpc29udmEub3Jn&src=Y182MzUyMGFjMzUxOWI3MzgzODkwODA5MDIyODkxODY3MDVlNTVhMjg2YTMzMTI1NjIzYWY2MmI4MjUxMzI2ZDcyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23f4511e&color=%230b8043"
        className="w-full rounded-lg border border-gray-300"
        height="600"
        scrolling="no"
        title="MESA Community Calendar"
      />
    </div>
  );
}
