using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework;

namespace XNAGame.Entities
{
    public class Scroll
    {
        public Vector2 Position;
        public Texture2D texture;

        public int animTimer = 10;
        public double animElapsed = 0;
        public int decalX = 0;


        public Scroll()
        {
            this.Position = new Vector2(0, 529);
			this.texture = Game1.GAME.Content.Load<Texture2D>("scroll");
        }

        public void Update()
        {
            animElapsed += Statics.GAMETIME.ElapsedGameTime.TotalMilliseconds;
            if (animElapsed > animTimer)
            {
                this.decalX+=2;
                if (decalX > 12)
                    decalX = 0;
                animElapsed = 0;
            }
        }

        public void Draw() {

			for (int i = 0; i < 35; i++) {
				Statics.SPRITEBATCH.Draw(this.texture, this.Position + new Vector2(i*12,0) - new Vector2(decalX,0), Color.White);

			}

         
        }
    }
}
