import "../NavBar.css"
import { Chat } from "./Chat";

export const NavBar = ({ searchTerm, handleSearchTermChange, handleSubmit, setAnswer }) => {

  return (
    <>
      <nav id={"navbar"}>
        <ul>
          <div id = "articleFetch">
          <li>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for articles"
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
            <button type="submit" className="fetch-articles-btn">Fetch Articles</button>
            </form>
          </li>
        </div>
        <div id="searchbox">
            <li>
              <Chat setAnswer={setAnswer}/>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};