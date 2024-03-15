type Event = {
  event_id: string;
  finished_at: string;
  image_url: string;
  message: string;
  name: string;
  owner_id: string;
  started_at: string;
};

type Skills = {
  [key: string]: string;
};

type URLs = {
  [key: string]: string;
};

type UserData = {
  events: Event[];
  image_url: string;
  is_organizer: boolean;
  message: string;
  name: string;
  skills: Skills;
  urls: URLs;
  user_id: string;
};

type TecherData = {
  event_id: string;
  user_id: string;
};

export const getData = async (token: string) => {
  try {
    const response = await fetch(
      "https://server-u7kyixk36q-an.a.run.app/exchanges",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const jsonData: TecherData[] = await response.json();
    //refactTecherDataを使ってTecherTypeの配列を作成
    const TechersType = refactTecherData(jsonData, token);
    return TechersType;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchUserData = async (user_id: string, token: string) => {
  //https://server-u7kyixk36q-an.a.run.app/exchangesへuser_id:stringを渡すことでUserDataを取得
  const response = await fetch(
    `https://server-u7kyixk36q-an.a.run.app/users/${user_id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const jsonData: UserData = await response.json();
  return jsonData;
};

export const refactTecherData = async (TechersData: TecherData[], token: string) => {
  //同じuser_idの無い配列を作成
  const uniqueTechersData = TechersData.filter(
    (techer, i, self) =>
      self.findIndex((t) => t.user_id === techer.user_id) === i
  );
  //uniqueTechersDataの重複した回数の配列を作成
  const Techers = uniqueTechersData.map(techer => ({
    user_id: techer.user_id,
    times: TechersData.filter(t => t.user_id === techer.user_id).length,
  }));
  //uniqueTechersDataのuser_idからUserDataの配列を作成
    //fetchUserDataを使ってUserDataを取得
  const usersData = await Promise.all(
    Techers.map(techer => fetchUserData(techer.user_id, token))
  );
    //UserDataの画像をと名前を取得
    const image = user.image_url;
    const name = user.name;
    return {
      image,
      name,
    };
  });
  //TecherTypeの配列を作成
  const TechersType = UserData.map((user, i) => {
    return {
      image: user.image_url,
      name: user.name,
      times: Techers[i].times,
    };
  });

  return TechersType;
};
