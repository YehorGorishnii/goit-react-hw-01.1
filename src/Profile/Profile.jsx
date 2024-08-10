import css from "../Profile/Prefile.module.css"


export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {




  return (
    <div className={css.conteiner}>
      <div className={css.profile}>
        <img src={image} alt="User avatar" className={css.img} />
        <p className={css.user}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
