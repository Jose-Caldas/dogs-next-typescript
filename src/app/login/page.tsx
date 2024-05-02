export default async function LoginPage() {
  return (
    <form>
      <h1 className="title">Página Login</h1>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
    </form>
  )
}
