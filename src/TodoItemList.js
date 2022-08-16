import "./Todolist.css";

export default function TodoItemList(props) {
  return (
    <>
      <div className="item-container">
        <div className="item-listed">
          <ol>
            <li>{props.li}</li>
          </ol>
        </div>

        <div className="delete-item">
          <button
            className="delete-button"
            onClick={() => {
              props.del(props.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
