export default function Post({item, searchPost}) {
    return (
        <div>
            {item.userId} -
            {item.id}
            <button onClick={() => searchPost(item.id)}>details</button>
        </div>
    );
}
