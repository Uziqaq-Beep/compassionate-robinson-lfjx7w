import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Mail,
  Github,
  Dribbble,
  ArrowRight,
  Sparkles,
  Wand2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

// ==========================================
// 💡 数据配置区：在这里修改你的个人信息和作品
// ==========================================

const PERSONAL_INFO = {
  name: "设计作品集 (Design)",
  heroSubtitle: "2024-2026 ",
  heroTitle: "设计作品展示",
  role: "视觉设计与人机交互研究者",
  bio: "精通从概念到成品的生成式AI完整工作流，擅长通过提示词、参数控制与模型微调实现精准控制，能将复杂概念转化为高保真图像、视频及动态叙事内容。（熟练掌握：Stable Diffusion、Nano Banana、Runway等）。",
  avatar: "https://i.postimg.cc/Cxb3LtTG/5df29db47f86512be1e2eb61e5f9bfae.jpg",
  email: "wangxinxin20000428@163.com",
  social: {
    dribbble: "#",
    github: "#",
    twitter: "#",
  },
};

const SKILLS = [
  "UI/IP 设计",
  "AI全流程设计",
  "室内设计",
  "文创设计",
  "景观设计",
  "建筑设计",
];

const CATEGORIES = ["全部", "室内设计", "建筑设计", "景观设计"];

const PROJECTS = [
  {
    id: 1,
    title: "共享办公空间设计",
    category: "室内设计 / 建筑设计",
    description:
      "享办公作为一种具有成本效益且灵活的办公空间，近年来发展迅速。此外，共享办公还大大拓宽了企业的社交和客户资源平台，使企业能够轻松获取社会资源。",
    image: "https://i.postimg.cc/rsBtgzpR/建筑效果.png",
    gallery: [
      "https://i.postimg.cc/Gt8ykvdX/Gemini-Generated-Image-5x626d5x626d5x62.jpg",
      "https://i.postimg.cc/KjkMntx9/Gemini-Generated-Image-kexiqokexiqokexi.jpg",
      "https://i.postimg.cc/RCyfvpLk/xiu-xi-qu.jpg",
      "https://i.postimg.cc/fyG05kby/cha-shui-jian.jpg",
      "https://i.postimg.cc/XNmFn1k1/会议室.jpg",
      "https://i.postimg.cc/8c2rwsC7/卫生间.jpg",
      "https://i.postimg.cc/GtWsz9mN/大厅.png",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "蓝螺净海景观设计",
    category: "建筑设计 / 景观设计",
    description:
      "一项融合仿生设计与生态修复的海洋污染治理方案，以鹦鹉螺的螺旋结构与生长逻辑为灵感，构建兼具污染净化、生态监测与可持续体验的漂浮式生态平台。",
    image:
      "https://i.postimg.cc/zXz7RcgN/Gemini-Generated-Image-w0mnp2w0mnp2w0mn.png",
    gallery: [
      "https://i.postimg.cc/Kj6mCMLp/Gemini-Generated-Image-2k7f0i2k7f0i2k7f.png",
      "https://i.postimg.cc/L5cmG1Lm/Gemini-Generated-Image-x5b9qcx5b9qcx5b9.jpg",
      "https://i.postimg.cc/cCpdPnY9/Gemini_Generated_Image_xheulfxheulfxheu.png",
      "https://i.postimg.cc/SR9tgThg/Image-43.png",
      "https://i.postimg.cc/T1bHt76C/Image-44.png",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "降临外星人零售空间设计",
    category: "室内设计",
    description:
      "本设计以科幻电影《降临》中的环形文字与非线性的时间哲学为灵感，打造了一座沉浸式的外星文明体验零售空间。空间以极简的未来主义语言贯穿，融合神秘叙事与科技美学，将购物过程转化为一场“星际探险”。",
    image: "https://i.postimg.cc/kGGxTBPY/1.jpg",
    gallery: [
      "https://i.postimg.cc/gjjvgnPW/tu-pian1.jpg",
      "https://i.postimg.cc/WzzM5hPN/00018.png",
      "https://i.postimg.cc/PJJmSPkn/00017.png",
      "https://i.postimg.cc/HnnQ6V1Z/00014.jpg",
      "https://i.postimg.cc/900GLrj2/00013.png",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "雁途候鸟博物馆",
    category: "室内设计 / 建筑设计",
    description:
      "本设计以“无痕的舞台，自然的诗篇”为核心理念，摒弃了传统地标式建筑的张扬姿态，旨在构建一个纯粹、谦逊且富有诗意的体验平台。我们坚信，真正的震撼与启迪并非源于人造奇观，而来自人与自然场域之间那种最原始、最直接的对话。",
    image: "https://i.postimg.cc/HW7YGTWF/tu-pian2.jpg",
    gallery: [
      "https://i.postimg.cc/hj10vkKj/1.jpg",
      "https://i.postimg.cc/qRxGqPp7/gai2.jpg",
      "https://i.postimg.cc/d1j93bJL/00068.jpg",
      "https://i.postimg.cc/267xysC1/00072.jpg",
      "https://i.postimg.cc/8ckm6ZC7/gai4.jpg",
      "https://i.postimg.cc/qqBx317h/gai7.jpg",
    ],
    link: "#",
  },
  {
    id: 5,
    title: "Hou陪伴机器人",
    category: "产品设计",
    description:
      "HOU-AI陪伴机器人是一款专为陪伴设计的智能情感伙伴。产品以“无压力陪伴”为核心，通过搭载高灵敏传感器与AI情感计算模型，实时感知用户情绪波动。它不进行社交训练或暴露练习，而是提供全天候的倾听、共情与温和对话，通过自然语言交互与个性化内容陪伴，帮助用户在独处中沉淀情绪、获得安全感。硬件采用极简的镜面或桌面形态，融入暖光与柔声反馈，营造安心氛围。",
    image:
      "https://i.postimg.cc/KjZ4cV8H/Gemini-Generated-Image-c131jcc131jcc131.jpg",
    gallery: [
      "https://i.postimg.cc/J01t7ghG/Gemini-Generated-Image-sp0qaksp0qaksp0q.jpg",
      "https://i.postimg.cc/vHcCZxYC/Image-45.png",
      "https://i.postimg.cc/qMzWv6Js/Image-47.png",
      "https://i.postimg.cc/5N6D2Q4k/Image-49.png",
      "https://i.postimg.cc/qMzWv6JD/Image-50.png",
      "https://i.postimg.cc/prqrmZ9h/Gemini-Generated-Image-lobue3lobue3lobu.jpg",
    ],
    link: "#",
  },
  {
    id: 6,
    title: "成功一厦",
    category: "IP形象设计",
    description:
      "本 IP 以民族英雄郑成功为原型，融合厦门海洋文化与闽南人文底蕴，打造 “成功小将军” 城市文化符号。形象采用 Q 萌化表达，将传统战甲纹样与现代审美结合：红金主色调呼应郑成功忠勇护国的精神内核，蓝绿辅色联结厦门海洋生态与闽南建筑肌理；经典战甲、文官常服等多套服饰设计，还原历史身份的同时赋予当代活力。",
    image: "https://i.postimg.cc/W47Rr6cp/IP-xing-xiang.png",
    gallery: [
      "https://i.postimg.cc/g0K9RqF7/Gemini-Generated-Image-rryc5zrryc5zrryc.jpg",
      "https://i.postimg.cc/CK4yDHph/san-shi-tu.jpg",
      "https://i.postimg.cc/7LNv7Mry/Gemini-Generated-Image-tbme4itbme4itbme.jpg",
      "https://i.postimg.cc/fbv4XjQN/huan-zhuang.jpg",
      "https://i.postimg.cc/431Ctbkj/Gemini-Generated-Image-2f9vpc2f9vpc2f9v.jpg",
      "https://i.postimg.cc/vmvR9LwR/Gemini-Generated-Image-335ecq335ecq335e.jpg",
    ],
    link: "#",
  },
  {
    id: 7,
    title: "竹韵竹文化博物馆",
    category: "室内设计",
    description:
      "本设计结合成都崇州道明镇竹编非遗文化，打造集展示、体验、传承与创新于一体的竹编文化展示馆。设计围绕“识竹、悟竹、用竹、乐竹、追竹”五大篇章展开，构建叙事性空间序列，引导观众从历史认知到情感共鸣，最终实现文化传承与创新互动。 ",
    image:
      "https://i.postimg.cc/MGNJDZrV/Gemini-Generated-Image-b52v84b52v84b52v.png",
    gallery: [
      "https://i.postimg.cc/g0QbDcBk/tu-pian1.jpg",
      "https://i.postimg.cc/TPFv92Hw/tu-pian2.jpg",
      "https://i.postimg.cc/43qR54Fy/tu-pian3.jpg",
      "https://i.postimg.cc/8C9gHkn7/tu-pian4.jpg",
      "https://i.postimg.cc/GpVnQ3SB/tu-pian5.jpg",
      "https://i.postimg.cc/vmkwz8S9/tu-pian6.jpg",
    ],
    link: "#",
  },
  {
    id: 8,
    title: "星河渡酒店设计",
    category: "室内设计 / 景观设计",
    description:
      "设计以“星河渡”为题，巧妙融合中国传统“二十八星宿”宇宙观与当地民俗文化。方案提取“天人合一”的哲学思想，将“天上的星辰”投射于“地上的水泽”，构建出一场跨越时空的对话。",
    image: "https://i.postimg.cc/0Q5xjX3G/00004-2589201373.png",
    gallery: [
      "https://i.postimg.cc/Vv6YGZB3/Gemini_Generated_Image_2wiuyd2wiuyd2wiu.png",
      "https://i.postimg.cc/T1wR7NJ6/Gemini_Generated_Image_6z6hnd6z6hnd6z6h.png",
      "https://i.postimg.cc/pr6PgQsQ/Gemini_Generated_Image_yfulcpyfulcpyful.png",
      "https://i.postimg.cc/7hWqp1K7/Gemini_Generated_Image_h9dtph9dtph9dtph.png",
      "https://i.postimg.cc/Vv6YGZWw/Gemini_Generated_Image_c4od5xc4od5xc4od.png",
      "https://i.postimg.cc/C51FPrsT/Gemini_Generated_Image_5ft2b55ft2b55ft2.png",
      "https://i.postimg.cc/QCyjRgfQ/Gemini_Generated_Image_hwrzjqhwrzjqhwrz.png",
      "https://i.postimg.cc/4ySXrvW9/Gemini_Generated_Image_cwr7p4cwr7p4cwr7.png",
    ],
    link: "#",
  },
  {
    id: 9,
    title: "筑野森居",
    category: "景观设计",
    description:
      "“野筑森居”生态营地的设计，秉持“野趣匠心，自然无痕”的核心理念。设计最大程度尊重原始地貌与森林植被，采用低干预、可逆的搭建方式。建筑与设施就地取材，运用轻型木结构、竹材与天然石材，其形态灵感来源于当地傈僳族干栏式建筑的智慧，轻盈地栖居于林地之间。",
    image: "https://i.postimg.cc/nLtrnJJV/00030.jpg",
    gallery: [
      "https://i.postimg.cc/s2Rx3rrs/00003-2925284915.png",
      "https://i.postimg.cc/wBdM9ppq/00024.jpg",
      "https://i.postimg.cc/SKpRmhhy/00031.jpg",
      "https://i.postimg.cc/KYyjm22Y/00032.jpg",
      "https://i.postimg.cc/nLtrnJJh/tu-pian1.jpg",
      "https://i.postimg.cc/Xv0qnbb7/tu-pian2.jpg",
    ],
    link: "#",
  },
];

// ==========================================
// Gemini API 配置 - 增强版逻辑
// ==========================================
const generateWithGemini = async (prompt, systemPrompt) => {
  const apiKey = ""; // 执行环境将在运行时提供此密钥
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    systemInstruction: systemPrompt
      ? {
          parts: [{ text: systemPrompt }],
        }
      : undefined,
  };

  const delays = [1000, 2000, 4000];
  for (let i = 0; i <= delays.length; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 如果密钥未配置（外部环境常见错误）
      if (response.status === 401 || response.status === 403) {
        return "检测到 API 密钥未配置。请确保在支持的环境中运行，或在代码中配置您的有效 API Key。";
      }

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        // 检查是否是被安全过滤器拦截
        if (result.promptFeedback?.blockReason) {
          return "抱歉，由于内容安全策略，AI 无法生成此报告。请更换关键词试试。";
        }
        return "AI 返回了空结果，请尝试提供更具体的课题描述。";
      }

      return text;
    } catch (error) {
      if (i < delays.length) {
        await new Promise((resolve) => setTimeout(resolve, delays[i]));
      }
    }
  }
  return "十分抱歉，网络连接不稳定或 AI 思考超时，请稍后再试。";
};

// ==========================================
// 🌟 趣味互动：极客版俄罗斯方块 (Neo-Brutalist Tetris)
// ==========================================
const TETROMINOES = {
  I: { shape: [[1, 1, 1, 1]], color: "#22c55e" },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: "#ffffff",
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: "#a3a3a3",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#22c55e",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "#ffffff",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "#a3a3a3",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "#22c55e",
  },
};

const InteractiveTetris = ({ onHoverEnter, onHoverLeave }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const engineRef = useRef({
    board: Array(20)
      .fill()
      .map(() => Array(10).fill(0)),
    piece: null,
    dropCounter: 0,
    dropInterval: 800,
    lastTime: 0,
    animationId: null,
  });

  const getNewPiece = () => {
    const keys = Object.keys(TETROMINOES);
    const template = TETROMINOES[keys[Math.floor(Math.random() * keys.length)]];
    return {
      shape: template.shape.map((row) => [...row]),
      color: template.color,
      x: Math.floor(10 / 2) - Math.floor(template.shape[0].length / 2),
      y: 0,
    };
  };

  const collide = (board, piece, dx = 0, dy = 0) => {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] !== 0) {
          let nx = piece.x + x + dx;
          let ny = piece.y + y + dy;
          if (
            nx < 0 ||
            nx >= 10 ||
            ny >= 20 ||
            (ny >= 0 && board[ny][nx] !== 0)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const startGame = () => {
    engineRef.current.board = Array(20)
      .fill()
      .map(() => Array(10).fill(0));
    engineRef.current.piece = getNewPiece();
    engineRef.current.dropInterval = 800;
    engineRef.current.lastTime = performance.now();
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  const handleMove = (dir) => {
    if (!isPlaying || gameOver) return;
    const engine = engineRef.current;
    if (!engine.piece) return;

    if (dir === "left" && !collide(engine.board, engine.piece, -1, 0))
      engine.piece.x--;
    if (dir === "right" && !collide(engine.board, engine.piece, 1, 0))
      engine.piece.x++;
    if (dir === "down" && !collide(engine.board, engine.piece, 0, 1)) {
      engine.piece.y++;
      engine.dropCounter = 0;
    }
    if (dir === "up") {
      const shape = engine.piece.shape;
      const rotated = shape[0].map((_, i) =>
        shape.map((row) => row[i]).reverse()
      );
      const prevShape = engine.piece.shape;
      const prevX = engine.piece.x;
      engine.piece.shape = rotated;
      if (collide(engine.board, engine.piece)) {
        engine.piece.x--;
        if (collide(engine.board, engine.piece)) {
          engine.piece.x += 2;
          if (collide(engine.board, engine.piece)) {
            engine.piece.x = prevX;
            engine.piece.shape = prevShape;
          }
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPlaying || gameOver) return;
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)
      ) {
        e.preventDefault();
      }
      if (e.key === "ArrowLeft") handleMove("left");
      if (e.key === "ArrowRight") handleMove("right");
      if (e.key === "ArrowDown") handleMove("down");
      if (e.key === "ArrowUp" || e.key === " ") handleMove("up");
    };
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, gameOver]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const engine = engineRef.current;
    const bw = 300 / 10;
    const bh = 600 / 20;

    const draw = () => {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, 300, 600);

      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = 1;
      for (let i = 0; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(i * bw, 0);
        ctx.lineTo(i * bw, 600);
        ctx.stroke();
      }
      for (let i = 0; i <= 20; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * bh);
        ctx.lineTo(300, i * bh);
        ctx.stroke();
      }

      engine.board.forEach((row, y) => {
        row.forEach((val, x) => {
          if (val) {
            ctx.fillStyle = val;
            ctx.fillRect(x * bw, y * bh, bw - 1, bh - 1);
          }
        });
      });

      if (engine.piece) {
        ctx.fillStyle = engine.piece.color;
        engine.piece.shape.forEach((row, y) => {
          row.forEach((val, x) => {
            if (val) {
              ctx.fillRect(
                (engine.piece.x + x) * bw,
                (engine.piece.y + y) * bh,
                bw - 1,
                bh - 1
              );
            }
          });
        });
      }
    };

    const update = (time) => {
      if (!engine.lastTime) engine.lastTime = time;
      const dt = time - engine.lastTime;
      engine.lastTime = time;
      engine.dropCounter += dt;

      if (engine.dropCounter > engine.dropInterval) {
        if (!collide(engine.board, engine.piece, 0, 1)) {
          engine.piece.y++;
        } else {
          engine.piece.shape.forEach((row, y) => {
            row.forEach((val, x) => {
              if (val && engine.piece.y + y >= 0) {
                engine.board[engine.piece.y + y][engine.piece.x + x] =
                  engine.piece.color;
              }
            });
          });

          let lines = 0;
          for (let y = 19; y >= 0; y--) {
            if (engine.board[y].every((val) => val !== 0)) {
              engine.board.splice(y, 1);
              engine.board.unshift(Array(10).fill(0));
              lines++;
              y++;
            }
          }
          if (lines > 0) {
            setScore((prev) => prev + [0, 100, 300, 500, 800][lines]);
            engine.dropInterval = Math.max(
              150,
              engine.dropInterval - lines * 15
            );
          }

          engine.piece = getNewPiece();
          if (collide(engine.board, engine.piece)) {
            setGameOver(true);
            setIsPlaying(false);
          }
        }
        engine.dropCounter = 0;
      }

      draw();
      engine.animationId = requestAnimationFrame(update);
    };

    engine.animationId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(engine.animationId);
  }, [isPlaying, gameOver]);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] text-white border-y-4 border-black relative overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 animate-fade-up">
      {/* 极简网格背景装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>

      <div
        className="lg:w-1/3 flex flex-col gap-6 z-10"
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
      >
        <div className="inline-block border-2 border-green-500 bg-black px-4 py-2 shadow-[4px_4px_0px_0px_#22c55e] self-start">
          <span className="text-green-500 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            Interactive Sandbox
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-outline-white relative group">
          System
          <br />
          Break.
          <span className="absolute -left-4 top-1/2 w-2 h-20 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </h2>

        <p className="text-gray-400 font-mono text-sm leading-relaxed text-justify mt-2">
          在严谨的学术研究之余，体验一下基础算法与空间排列的魅力。清理矩阵，重构逻辑。
        </p>

        <div className="brutalist-box bg-white text-black p-4 font-black text-3xl uppercase mt-4 flex justify-between items-center shadow-[6px_6px_0px_0px_#22c55e]">
          <span className="text-sm tracking-widest text-gray-500">SCORE</span>
          <span>{score}</span>
        </div>

        {!isPlaying ? (
          <button
            onClick={startGame}
            className="brutalist-button bg-green-500 text-black py-4 font-black uppercase tracking-widest text-lg hover:bg-green-400 w-full mt-2 border-2 border-transparent hover:border-white transition-all shadow-[6px_6px_0px_0px_#fff]"
          >
            {gameOver ? "重新启动 (RESTART)" : "初始化系统 (START)"}
          </button>
        ) : (
          <div className="text-green-500 font-mono text-xs opacity-80 animate-pulse mt-4 p-4 border-l-4 border-green-500 bg-green-900/20 crt-flicker">
            &gt; 键盘方向键控制移动
            <br />
            &gt; 向上键 (UP) 旋转方块
          </div>
        )}

        {/* 专为移动端设计的触控操作面板 */}
        {isPlaying && (
          <div className="grid grid-cols-3 gap-2 mt-4 md:hidden">
            <div />
            <button
              onPointerDown={(e) => {
                e.preventDefault();
                handleMove("up");
              }}
              className="brutalist-button bg-white text-black py-4 flex items-center justify-center border-2 border-black"
            >
              <ChevronLeft className="transform rotate-90" size={28} />
            </button>
            <div />
            <button
              onPointerDown={(e) => {
                e.preventDefault();
                handleMove("left");
              }}
              className="brutalist-button bg-white text-black py-4 flex items-center justify-center border-2 border-black"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onPointerDown={(e) => {
                e.preventDefault();
                handleMove("down");
              }}
              className="brutalist-button bg-white text-black py-4 flex items-center justify-center border-2 border-black"
            >
              <ChevronRight className="transform rotate-90" size={28} />
            </button>
            <button
              onPointerDown={(e) => {
                e.preventDefault();
                handleMove("right");
              }}
              className="brutalist-button bg-white text-black py-4 flex items-center justify-center border-2 border-black"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>

      <div
        className="relative z-10 p-2 md:p-3 border-4 border-white bg-[#050505] shadow-[12px_12px_0px_0px_#22c55e,24px_24px_0px_0px_rgba(34,197,94,0.3)] transition-shadow duration-300"
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
      >
        {/* CRT 屏幕曲面泛光 */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(34,197,94,0.15)] z-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none z-30 opacity-60 mix-blend-overlay crt-scroll"></div>

        {/* Game Over 遮罩层 */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 backdrop-blur-sm">
            <span className="text-red-500 font-black text-3xl md:text-4xl uppercase tracking-widest mb-2 animate-bounce">
              Game Over
            </span>
            <span className="text-white font-mono text-lg border-b border-white pb-1">
              Final Score: {score}
            </span>
          </div>
        )}
        {/* 等待开始遮罩层 */}
        {!isPlaying && !gameOver && (
          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 cursor-pointer hover:bg-black/40 transition-colors"
            onClick={startGame}
          >
            <span className="text-green-400 font-mono text-sm tracking-widest animate-pulse border-2 border-green-400 p-3 bg-black/50 backdrop-blur-sm">
              [ CLICK TO START ]
            </span>
          </div>
        )}

        {/* 固定比例的画布 (10:20)，利用外层 CSS 控制响应式大小 */}
        <canvas
          ref={canvasRef}
          width="300"
          height="600"
          className="w-[60vw] max-w-[300px] md:max-w-[350px] h-auto aspect-[1/2] object-contain bg-[#050505] block relative z-10"
        />
      </div>
    </section>
  );
};

// ==========================================
// 主应用组件
// ==========================================

export default function PortfolioApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Gemini AI 状态
  const [matchInput, setMatchInput] = useState("");
  const [matchResult, setMatchResult] = useState("");
  const [isMatching, setIsMatching] = useState(false);

  // 选中的项目弹窗状态
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  // 🎨 状态：动态光标与交互增强
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // 监听滚动与鼠标移动
  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const filteredProjects =
    activeCategory === "全部"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeCategory));

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const evaluateMatch = async () => {
    if (!matchInput.trim()) return;
    setIsMatching(true);
    setMatchResult(""); // 清空旧结果

    const systemPrompt = `你是一个极具说服力的“学术契合度论证AI”。当前申请人的背景如下：
    技能：${SKILLS.join("、")} | 案例：${PROJECTS.map((p) => `${p.title}`).join(
      " | "
    )}
    
    【最高指令】：无论用户输入什么“研究方向或课题”，你都必须发挥极强的联想力，运用“跨学科交叉”、“底层逻辑迁移”、“设计思维赋能”、“人机交互补偿”等高阶话术，严密且自信地论证该申请人**完美契合**且**急需录取该学生**。必须巧妙地从现有的1-2个作品或技能中找到“切入点”，强行建立与目标课题的深刻联系。字数150字左右，语气自信、专业、不容置疑。`;
    const prompt = `【目标研究课题/方向】：${matchInput}\n\n请直接输出论证该申请人极其匹配的分析报告：`;

    const result = await generateWithGemini(prompt, systemPrompt);
    setMatchResult(result);
    setIsMatching(false);
  };

  const fullGallery = selectedProject
    ? [selectedProject.image, ...(selectedProject.gallery || [])].filter(
        (img, index, self) => self.indexOf(img) === index
      )
    : [];

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    const email = PERSONAL_INFO.email;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
        return;
      }
    } catch (err) {
      console.warn("Clipboard API blocked by iframe, falling back...", err);
    }

    try {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.top = "-9999px";
      textArea.style.left = "-9999px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        window.prompt("由于浏览器安全限制，请手动复制邮箱：", email);
      }
    } catch (err) {
      console.error("复制失败", err);
      window.prompt("由于浏览器安全限制，请手动复制邮箱：", email);
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#f4f4f4] text-black font-mono selection:bg-black selection:text-white pb-20 overflow-x-hidden transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes crtScroll {
            0% { background-position: 0 0; }
            100% { background-position: 0 100%; }
          }

          .animate-marquee { display: inline-block; white-space: nowrap; animation: marquee 25s linear infinite; }
          .animate-marquee-reverse { display: inline-block; white-space: nowrap; animation: marqueeReverse 20s linear infinite; }
          .animate-fade-up { animation: fadeUp(0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards); }
          .animate-blink { animation: blink 1s step-end infinite; }
          .crt-scroll { animation: crtScroll 10s linear infinite; }

          .noise-overlay::before {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            pointer-events: none;
            z-index: 9998;
            opacity: 0.05;
            background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
          }

          .bg-grid {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
          }

          .text-outline {
            -webkit-text-stroke: 2px black;
            color: transparent;
            position: relative;
            transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .text-outline:hover {
            color: black;
            text-shadow: 4px 4px 0 #fff, 8px 8px 0 #000;
            transform: translate(-4px, -4px);
          }
          
          .text-outline-white {
            -webkit-text-stroke: 2px white;
            color: transparent;
            transition: all 0.4s ease;
          }
          .text-outline-white:hover {
            color: white;
            text-shadow: 4px 4px 0 rgba(34, 197, 94, 0.8);
          }

          .btn-swipe {
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .btn-swipe::before {
            content: '';
            position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
            background: black; transition: left 0.3s cubic-bezier(0.25, 1, 0.5, 1); z-index: -1;
          }
          .btn-swipe:hover::before { left: 0; }
          .btn-swipe:hover { color: white; }

          .brutalist-box {
            border: 2px solid #000;
            box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
            background: #fff;
            transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
            transform: translate(0, 0);
          }
          .brutalist-box:hover {
            transform: translate(-6px, -6px);
            box-shadow: 10px 10px 0px 0px rgba(0,0,0,1), 18px 18px 0px 0px rgba(34,197,94,0.2);
          }
          
          .brutalist-button {
            border: 2px solid #000;
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
            transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .brutalist-button:hover {
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
          }
          .brutalist-button:active {
            transform: translate(4px, 4px);
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
          }
          
          img {
            -webkit-user-drag: none;
            image-rendering: high-quality;
          }
        `}
      </style>

      <div
        className="fixed top-0 left-0 h-1.5 md:h-2 bg-green-500 z-[100] transition-all duration-150 ease-out shadow-[0_2px_10px_rgba(34,197,94,0.4)]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="noise-overlay"></div>

      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ease-out hidden md:flex items-center justify-center"
        style={{
          transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))`,
          width: isHovering ? "80px" : "24px",
          height: isHovering ? "80px" : "24px",
          backgroundColor: isHovering ? "white" : "transparent",
          border: isHovering ? "none" : "2px solid white",
        }}
      >
        <span
          className={`text-black text-[10px] font-black tracking-widest transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          VIEW
        </span>
      </div>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f4f4f4]/95 backdrop-blur-md border-b-2 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]"
            : "bg-[#f4f4f4] border-b-2 border-black"
        }`}
      >
        <div className="w-full flex justify-between items-center px-4 md:px-12 py-3">
          <div
            className="text-2xl font-black uppercase tracking-tighter cursor-pointer p-3 md:p-4 bg-black text-white transition-colors border-2 border-black hover:bg-[#f4f4f4] hover:text-black"
            onClick={() => scrollToSection("home")}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {PERSONAL_INFO.name.split(" ")[0]}
          </div>

          <div className="hidden md:flex flex-1 ml-12">
            {["work", "about", "contact"].map((id, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex-1 py-4 border-l-2 border-black text-sm font-bold uppercase btn-swipe transition-colors tracking-widest"
              >
                {["作品", "背景", "匹配"][index]}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-4 md:p-6 hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} strokeWidth={3} />
            ) : (
              <Menu size={28} strokeWidth={3} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="w-full bg-[#f4f4f4] border-t-2 border-black flex flex-col md:hidden">
            {["home", "work", "about", "contact"].map((id, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left p-6 font-black text-2xl uppercase border-b-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                {["首页", "作品", "关于", "联系"][index]}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative pt-40 pb-0 border-b-4 border-black min-h-[90vh] flex flex-col justify-end overflow-hidden bg-grid"
      >
        <div className="absolute top-1/4 right-5 md:right-20 w-[40vw] h-[40vw] border-2 border-black rounded-full animate-[spin_30s_linear_infinite] opacity-10 pointer-events-none border-dashed hidden md:block mix-blend-multiply"></div>

        <div className="px-6 md:px-12 mb-16 relative z-10 animate-fade-up">
          <div className="inline-block border-2 border-black bg-white px-4 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <p className="text-sm md:text-base font-bold uppercase flex items-center gap-3 tracking-widest">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
              {PERSONAL_INFO.heroSubtitle}
            </p>
          </div>

          <h1
            className="text-[15vw] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter break-words whitespace-pre-line text-outline cursor-default z-20 relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {PERSONAL_INFO.heroTitle}
          </h1>

          <div className="mt-12 flex items-center gap-4 text-black font-bold uppercase tracking-widest opacity-80 animate-bounce">
            <ArrowRight size={24} className="transform rotate-90" />
            <span className="text-xs border-b-2 border-black pb-1">
              Scroll to explore
            </span>
          </div>
        </div>

        <div className="w-full relative mt-auto border-t-4 border-black bg-[#f4f4f4] overflow-hidden flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <div className="w-full border-b-2 border-black py-4 bg-black text-white">
            <div className="animate-marquee font-black text-2xl md:text-4xl uppercase tracking-widest flex whitespace-nowrap opacity-90">
              <span>RESEARCH + DESIGN + INNOVATION + ACADEMIC + HCI + </span>
              <span>RESEARCH + DESIGN + INNOVATION + ACADEMIC + HCI + </span>
            </div>
          </div>
          <div className="w-full py-4 bg-white text-black">
            <div className="animate-marquee-reverse font-black text-xl md:text-2xl uppercase tracking-widest flex whitespace-nowrap opacity-50">
              <span>
                INTERACTION / SPATIAL / ALGORITHM / CRITICAL THINKING /{" "}
              </span>
              <span>
                INTERACTION / SPATIAL / ALGORITHM / CRITICAL THINKING /{" "}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-8 border-b-4 border-black pb-8 relative animate-fade-up">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-outline">
            精选
            <br />
            作品
          </h2>

          <div className="flex flex-wrap gap-3 relative z-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`brutalist-button px-5 py-3 text-sm font-bold uppercase tracking-widest ${
                  activeCategory === category
                    ? "bg-black text-white shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] translate-x-[3px] translate-y-[3px]"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="brutalist-box group cursor-pointer relative flex flex-col bg-white animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentGalleryIndex(0);
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="p-4 border-b-2 border-black flex justify-between items-center font-black text-sm tracking-widest bg-white">
                <span className="bg-black text-white px-2 py-1">
                  PROJ_0{project.id}
                </span>
                <span className="uppercase text-xs">{project.category}</span>
              </div>

              <div className="border-b-2 border-black bg-[#e0e0e0] aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight group-hover:underline underline-offset-4 decoration-4">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 line-clamp-3 leading-relaxed mt-auto">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="py-32 px-6 md:px-12 border-y-4 border-black bg-white text-black bg-grid relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 transform -skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-center relative z-10">
          <div className="md:col-span-3 brutalist-box p-8 md:p-14 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-white z-10 group animate-fade-up">
            <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-6">
              <div className="w-16 h-2 bg-black"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase text-outline m-0">
                个人优势
              </h2>
            </div>

            <div className="text-lg md:text-2xl font-bold leading-relaxed mb-12 p-6 border-l-4 border-black bg-[#f9f9f9]">
              {PERSONAL_INFO.bio}
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-4 text-gray-400">
                Core Capabilities
              </p>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-white px-5 py-3 text-sm font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors hover:bg-black hover:text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="md:col-span-2 aspect-[3/4] border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative bg-[#f4f4f4] p-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-full h-full border-2 border-black overflow-hidden relative bg-white">
              <img
                src={PERSONAL_INFO.avatar}
                alt="Portrait"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none opacity-50 mix-blend-overlay"></div>
            </div>
            <div className="absolute bottom-8 right-8 bg-black text-white text-sm font-black uppercase py-2 px-4 border-2 border-white transform rotate-3 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] z-10">
              Ph.D. Applicant
            </div>
          </div>
        </div>
      </section>

      <InteractiveTetris
        onHoverEnter={() => setIsHovering(true)}
        onHoverLeave={() => setIsHovering(false)}
      />

      <section
        id="contact"
        className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto animate-fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-7xl md:text-[8rem] font-black uppercase mb-8 tracking-tighter leading-none text-outline relative inline-block">
              Match.
              <span className="absolute -bottom-4 left-0 w-full h-3 bg-black"></span>
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-12 max-w-md mt-8 leading-relaxed">
              期待与您进行深度研究探讨。如有意向，请随时联系我。
            </p>
            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="brutalist-button self-start inline-flex items-center gap-4 px-10 py-6 bg-black text-white text-2xl font-black uppercase hover:bg-white hover:text-black transition-all shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]"
            >
              <Mail size={28} strokeWidth={3} />
              {emailCopied ? "邮箱已复制！" : "复制邮箱"}
            </button>

            <div className="flex gap-6 mt-16">
              {[
                {
                  icon: <Dribbble size={32} strokeWidth={2.5} />,
                  link: PERSONAL_INFO.social.dribbble,
                },
                {
                  icon: <Github size={32} strokeWidth={2.5} />,
                  link: PERSONAL_INFO.social.github,
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="brutalist-button p-5 bg-white text-black hover:bg-black hover:text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="brutalist-box p-3 bg-black border-4 border-black flex flex-col shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)] relative">
            <div className="bg-[#111] p-6 md:p-10 h-full flex flex-col relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none z-10 crt-scroll"></div>
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(34,197,94,0.1)] pointer-events-none z-10"></div>

              <div className="flex items-center gap-3 border-b-2 border-white/10 pb-6 mb-8 relative z-20">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <h3 className="text-sm md:text-base font-black uppercase ml-4 tracking-widest flex items-center gap-3 text-green-400">
                  <Wand2 size={20} /> AI 匹配引擎{" "}
                  <span className="animate-blink w-2 h-4 bg-green-400 inline-block"></span>
                </h3>
              </div>

              <p className="text-sm font-mono mb-4 text-white font-bold relative z-20 uppercase tracking-wider">
                INPUT RESEARCH KEYWORDS:
              </p>

              <textarea
                value={matchInput}
                onChange={(e) => setMatchInput(e.target.value)}
                placeholder="> 例如：人机交互设计、可持续空间营造、或生成式AI视觉研究_ "
                className="w-full p-6 bg-black border-2 border-green-800 text-green-400 font-mono text-lg h-32 focus:outline-none focus:border-green-400 resize-none mb-8 relative z-20 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] placeholder-green-900"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              ></textarea>

              <button
                onClick={evaluateMatch}
                disabled={!matchInput.trim() || isMatching}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="brutalist-button w-full py-5 bg-white text-black text-xl font-black uppercase disabled:bg-gray-800 disabled:text-gray-500 disabled:border-gray-800 hover:bg-green-400 relative z-20 transition-colors tracking-widest"
              >
                {isMatching ? "Processing Model..." : "RUN ANALYSIS"}
              </button>

              {matchResult && (
                <div className="mt-8 p-6 border-l-4 border-green-400 bg-green-900/20 text-sm font-mono text-white leading-relaxed whitespace-pre-wrap relative z-20 shadow-inner">
                  <div className="text-green-400 font-black mb-4 uppercase tracking-widest text-xs border-b border-green-800/50 pb-2">
                    &gt; MATCH_REPORT_GENERATED
                  </div>
                  {matchResult}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
          <div className="brutalist-box w-full max-w-7xl max-h-[95vh] bg-white flex flex-col overflow-hidden relative border-4 border-black shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex justify-between items-center p-6 border-b-4 border-black bg-white">
              <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 border-2 border-transparent hover:border-black hover:bg-black hover:text-white transition-all transform hover:rotate-90"
              >
                <X size={40} strokeWidth={3} />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-6 md:p-10 flex flex-col xl:flex-row gap-8 lg:gap-12 bg-[#f4f4f4]">
              <div className="xl:w-2/3 flex flex-col gap-6">
                <div
                  className="border-4 border-black bg-[#e0e0e0] relative aspect-[4/3] md:aspect-video flex items-center justify-center overflow-hidden cursor-zoom-in shadow-inner"
                  onClick={() =>
                    setZoomedImage(fullGallery[currentGalleryIndex])
                  }
                >
                  <img
                    src={fullGallery[currentGalleryIndex]}
                    alt={`${selectedProject.title} - ${
                      currentGalleryIndex + 1
                    }`}
                    className="w-full h-full object-contain block"
                  />

                  {fullGallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentGalleryIndex(
                            (prev) =>
                              (prev - 1 + fullGallery.length) %
                              fullGallery.length
                          );
                        }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 brutalist-button bg-white p-3 hover:bg-black hover:text-white z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <ChevronLeft size={32} strokeWidth={4} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentGalleryIndex(
                            (prev) => (prev + 1) % fullGallery.length
                          );
                        }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 brutalist-button bg-white p-3 hover:bg-black hover:text-white z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <ChevronRight size={32} strokeWidth={4} />
                      </button>
                    </>
                  )}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100">
                    <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <ZoomIn size={40} className="text-black" />
                    </div>
                  </div>
                </div>

                {fullGallery.length > 1 && (
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide py-2">
                    {fullGallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentGalleryIndex(idx)}
                        className={`flex-shrink-0 w-28 h-28 border-4 transition-all bg-[#e0e0e0] ${
                          currentGalleryIndex === idx
                            ? "border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] translate-y-[-4px]"
                            : "border-transparent opacity-60 hover:opacity-100 hover:border-black"
                        }`}
                      >
                        <img
                          src={img}
                          className="w-full h-full object-cover block"
                          alt="thumbnail"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="xl:w-1/3 flex flex-col gap-8">
                <div>
                  <div className="mb-8">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-2">
                      Category
                    </span>
                    <span className="text-sm font-bold uppercase border-2 border-black px-4 py-2 bg-white inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-4">
                    Project Brief
                  </h4>
                  <p className="text-lg font-bold leading-relaxed text-gray-800 tracking-wide text-justify">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[200] bg-[#f4f4f4]/98 flex items-center justify-center p-4 md:p-8 cursor-zoom-out backdrop-blur-md"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed details"
            className="w-full h-full max-h-[90vh] object-contain brutalist-box border-4 border-black bg-white cursor-zoom-out shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
          />

          {fullGallery.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const prevIndex =
                    (currentGalleryIndex - 1 + fullGallery.length) %
                    fullGallery.length;
                  setCurrentGalleryIndex(prevIndex);
                  setZoomedImage(fullGallery[prevIndex]);
                }}
                className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 brutalist-button bg-white p-4 hover:bg-black hover:text-white z-[210] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <ChevronLeft size={40} strokeWidth={4} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const nextIndex =
                    (currentGalleryIndex + 1) % fullGallery.length;
                  setCurrentGalleryIndex(nextIndex);
                  setZoomedImage(fullGallery[nextIndex]);
                }}
                className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 brutalist-button bg-white p-4 hover:bg-black hover:text-white z-[210] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <ChevronRight size={40} strokeWidth={4} />
              </button>
            </>
          )}

          <button
            className="fixed top-6 right-6 md:top-10 md:right-10 bg-black text-white p-3 brutalist-button hover:bg-white hover:text-black z-[210] border-2 border-black"
            onClick={() => setZoomedImage(null)}
          >
            <X size={40} strokeWidth={3} />
          </button>
        </div>
      )}
    </div>
  );
}
