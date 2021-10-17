const CastList = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.cast_id}>
            <img
              src={
                "https://www.themoviedb.org/t/p/w66_and_h66_face" +
                item.profile_path
              }
              alt="cast_pic"
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
