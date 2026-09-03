import type { Locale } from "@/components/LanguageProvider";

import type { WorkItem } from "./work-types";

type WorkTranslation = Pick<WorkItem, "title" | "description"> & {
  label?: string;
  proof?: string;
};

const japaneseWorkCopy: Record<string, WorkTranslation> = {
  tu70w49zg: {
    title: "B2B予約管理プラットフォーム",
    description:
      "B2B向け予約管理プラットフォームを開発・運用。フロントエンドとTypeScriptバックエンドの機能開発から、デプロイ、本番運用までを担当。",
    label: "B2B SaaS · フルスタック開発",
    proof: "予約・顧客管理の業務フローをプロダクト化",
  },
  ifgicon3zy: {
    title: "B2B Webサイトビルダー",
    description:
      "B2B SaaSのWebサイトビルダーを開発・運用。プロダクト設計、フロントエンド、TypeScriptバックエンド、デプロイ、継続改善までを横断。",
    label: "B2B SaaS · プロダクト開発",
    proof: "Webサイトの作成・公開フローをプロダクト化",
  },
  dlws0xqu58s8: {
    title: "AI業務自動化",
    description:
      "AIを活用した業務自動化を実装から現場導入までリードし、継続的な外注コストを年間840万円削減。",
    label: "AI活用 · プロジェクトリード",
    proof: "継続的な外注コストを年間840万円削減",
  },
  "6kaf2nv1p0es": {
    title: "Reactアイコンピッカーライブラリ",
    description:
      "Webアプリケーション上でアイコンを選択できる、再利用可能なReact / TypeScriptパッケージを開発。",
  },
  "kc6e-zib8x6p": {
    title: "訪日旅行者向けスポット発見プラットフォーム",
    description:
      "訪日旅行者が個性的な地域のスポットを見つけ、自分のおすすめも投稿できる旅行プラットフォームを企画・開発。",
  },
  qqz_aqm1z: {
    title: "非接触型バーチャル受付サービス",
    description:
      "来訪者がキャラクターを選び、ビデオ通話のような受付体験に入れるB2B向けSPAを開発。",
  },
  "12xzx0vdgsv": {
    title: "世界規模フォトコンテスト — 結果発表ページ",
    description:
      "世界各国から応募が集まるフォトコンテストの結果発表ページをデザイン・実装。",
  },
  "7stri9efh": {
    title: "メンズウェアブランドサイト — 詳細ページ",
    description:
      "メンズアパレルのブランドサイトを拡張し、キャンペーン全体の世界観を保った商品詳細ページを制作。",
  },
  xv03h5s348yi: {
    title: "エディトリアル型商品サイト — 詳細ページ",
    description:
      "雑誌のような商品キャンペーンを詳細ページへ展開し、マウス操作で画像を比較できるインタラクションを実装。",
  },
  "6npl6q7299ow": {
    title: "エディトリアル型商品ブランディングサイト",
    description:
      "雑誌を思わせる商品ブランディングサイトをデザイン・実装し、マウス操作による画像比較体験を構築。",
  },
  dbqbjnrkc6s: {
    title: "水中撮影機材の商品検索",
    description:
      "流入元の画像をもとに対応商品を自動選択し、商品別に絞り込めるCookie連動型フィルターを実装。",
  },
  cjg28vxbk5j: {
    title: "メンズウェアブランドサイト",
    description:
      "メンズアパレルコレクションのブランドサイトで、デザインとフロントエンド実装をリード。",
  },
  "b-_m-gfaro": {
    title: "M.Zuiko PROレンズ ブランディングサイト",
    description:
      "スクロールに連動して植物が動くM.Zuiko PROレンズのブランドサイトで、デザインとフロントエンド開発をリード。",
  },
  tclve9ougnp0: {
    title: "世界規模フォトコンテストサイト",
    description:
      "世界中の参加者に向けたフォトコンテストサイトのデザインとフロントエンド開発をリード。",
  },
  "x3-4fnb8971": {
    title: "スクロール連動型商品キャンペーンサイト",
    description:
      "スクロールに合わせて左右の植物が動く商品キャンペーンサイトを、進行・設計から公開までリード。",
  },
  "9rpt5lvff": {
    title: "Zuikoレンズ 商品ブランディングサイト",
    description:
      "スクロールに連動して植物が動くZuikoレンズの商品サイトで、デザインとフロントエンド開発をリード。",
  },
  ora_t_zrqn: {
    title: "スクロール連動型動画プロダクト体験",
    description:
      "動画と商品ストーリーをスクロールで結びつけた、インタラクティブな商品ブランディングサイトを制作。",
  },
  "68h3v1by9": {
    title: "グローバルフォトコンテスト リマインドメール",
    description:
      "世界規模のフォトコンテスト向けHTMLメールを制作し、Google Analyticsで反応からサイト遷移までを計測。",
  },
  w4dm1u5k4yzs: {
    title: "PEN-F発売メールキャンペーン",
    description:
      "PEN-F発売に合わせたメールキャンペーンで、ディレクション、デザイン、HTML実装、計測設計を担当。",
  },
  "231w7jaqdmj": {
    title: "モバイル向けインタラクティブ動画商品サイト",
    description:
      "約7,000枚の動画フレームで構成されたPC向けスクロール体験を、実用的なモバイルサイトへ最適化。",
  },
  "tihg-g_z2": {
    title: "フレームアニメーション型商品サイト",
    description:
      "動画から抽出した約7,000枚のフレームを使い、スクロールで映像が進む商品サイトを実装。",
  },
  "1h5rvwsb050": {
    title: "水中撮影ブランドサイト",
    description:
      "水中撮影と対応機材に焦点を当てたブランドサイトで、デザインとフロントエンド開発をリード。",
  },
  "36zu0k6-0rl": {
    title: "アートフィルターフォトコンテスト — 結果発表",
    description:
      "Facebook上で実施されたアートフィルター写真コンテストの結果発表ページをデザイン・実装。",
  },
  sitkb660vhs: {
    title: "空想カメラデザインコンテストサイト",
    description:
      "自由な発想のカメラデザインコンテストで、アートディレクションからフロントエンド実装までを担当。",
  },
  i3dtd0h67e: {
    title: "写真コミュニティプラットフォーム",
    description:
      "カメラブランドの写真コミュニティで、企画整理、ディレクション、デザイン、フロントエンド実装を横断。",
  },
  "6rwon9srf_a": {
    title: "M.Zuiko 300mm PROレンズ発売メール",
    description:
      "M.Zuiko 300mm F4 PROレンズの発売メールで、ディレクション、デザイン、HTML実装、計測設計を担当。",
  },
  "9y05z8ssm0": {
    title: "STYLUS TG-Tracker発売メールキャンペーン",
    description:
      "STYLUS TG-Trackerのターゲット別発売メールを制作し、デバイスを問わないHTML配信と効果計測を実施。",
  },
  "r67-yrbubhg": {
    title: "写真展Webサイト",
    description:
      "写真展のWebサイトを顧客ヒアリングから納品まで担当し、特にメインビジュアルの表現を設計。",
  },
  "wk1w0-y80p": {
    title: "5軸手ぶれ補正 メールキャンペーン",
    description:
      "5軸手ぶれ補正を訴求するターゲット別商品メールを制作し、クロスデバイス配信と効果計測を実施。",
  },
  "3kswsjcy7tuu": {
    title: "スポーツ撮影向けレンズ メールキャンペーン",
    description:
      "スポーツ撮影向け望遠レンズを訴求するメールを制作し、クロスデバイス配信と効果計測を実施。",
  },
  ejnstnaetudm: {
    title: "祭り撮影 検索ランディングページ",
    description:
      "Google検索からの流入獲得を目的に、祭りの撮影をテーマとしたSEOランディングページを制作。",
  },
  w16nc2_m6: {
    title: "ターゲット別商品ブランディングサイト",
    description:
      "明確なターゲットに合わせ、スクロールに連動して左右の植物が動く商品ブランディングサイトを制作。",
  },
  d3p5yw53x9pl: {
    title: "コンパクトカメラ 商品ブランディングサイト",
    description:
      "スクロールに連動する植物の動きで、没入感のある商品ストーリーを伝えるブランドサイトをデザイン・実装。",
  },
  "6o_cta26l8xb": {
    title: "コンパクトカメラ 商品詳細ページ",
    description:
      "スクロールに連動する植物の動きと焦点を絞ったビジュアル表現で、没入感のある商品詳細ページを制作。",
  },
};

export const localizeWork = <T extends WorkItem>(
  work: T,
  locale: Locale,
): T => {
  if (locale === "en") {
    return work;
  }

  const translation = japaneseWorkCopy[work.id];

  return translation ? ({ ...work, ...translation } as T) : work;
};
