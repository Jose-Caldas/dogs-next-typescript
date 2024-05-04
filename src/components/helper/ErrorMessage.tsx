export default function ErrorMessage({
  errorMessage,
}: {
  errorMessage: string | boolean
}) {
  if (errorMessage === '') return null
  return <p style={{ color: '#f31', margin: '1rem 0' }}>{errorMessage}</p>
}
