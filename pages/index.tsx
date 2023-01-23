import ItemTile from "@/components/ItemTile";
import axios from "axios";

export type FetchedData = {
  data: TileData[];
};

export type TileData = {
  type: string;
  name: string;
  author: string;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  titleFour: string;
  link: string;
};

type HomeProps = {
  fetchedData: FetchedData;
};

const ONE_DAY = 86400;

export async function getStaticProps() {
  const fetchedData = await axios.get<FetchedData>(
    `https://gist.githubusercontent.com/simeor/ca44eb78d62ec56e71d814926a810cc7/raw/ca7a96ecefd373f701a4f2eba28b4aff512afe62/data.json`
  );

  return {
    props: {
      fetchedData: fetchedData.data,
    },
    revalidate: ONE_DAY,
  };
}

export default function Home(props: HomeProps) {
  const { fetchedData } = props;
  const { data } = fetchedData;
  return (
    <div style={{ padding: 8, backgroundColor: "white" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
        }}
      >
        {data.map((tile, index) => (
          <ItemTile
            key={`${tile?.name}-${tile?.author}`}
            data={tile}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
