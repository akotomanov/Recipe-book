export function HomeIcon({ className = 'size-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C11.6 3 11.2 3.15 10.9 3.4L10.7 3.6L9 5L6.3 7.3L3.7 9.5C3.3 9.8 3 10.3 3 10.9V11C3 11.6 3.4 12 4 12H5V19C5 19.6 5.4 20 6 20H9V15C9 14.4 9.4 14 10 14H14C14.6 14 15 14.4 15 15V20H18C18.6 20 19 19.6 19 19V12H20C20.6 12 21 11.6 21 11V10.9C21 10.3 20.7 9.8 20.3 9.5L17.7 7.3L15 5L13.3 3.6L13.1 3.4C12.8 3.15 12.4 3 12 3Z" />
    </svg>
  );
}
