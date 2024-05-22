import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}
