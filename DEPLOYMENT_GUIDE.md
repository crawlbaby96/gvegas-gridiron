# 🚀 Deployment Guide - Production & Staging

## Overview

This guide explains how to manage **Production** and **Staging** environments for your Gvegas Gridiron league page.

---

## 🌳 Branch Strategy

### **Branches:**
- **`master`** → Production site (live)
- **`staging`** → Test site (preview)

### **Workflow:**
1. **Develop** on `staging` branch
2. **Test** changes on staging site
3. **Merge** to `master` when ready
4. **Deploy** to production

---

## 🛠️ Setup Instructions

### **1. Create Staging Branch (Already Done)**
```bash
git checkout -b staging
git push -u origin staging
```

### **2. Configure Vercel Projects**

#### **Production Project:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create new project from your GitHub repo
3. Set **Production Branch** to `master`
4. Set **Framework Preset** to `SvelteKit`
5. Deploy

#### **Staging Project:**
1. Create another project from the same repo
2. Set **Production Branch** to `staging`
3. Set **Framework Preset** to `SvelteKit`
4. Deploy

### **3. Environment Variables**

#### **Production Environment:**
- `NODE_ENV=production`
- `VITE_SITE_ENV=production`

#### **Staging Environment:**
- `NODE_ENV=staging`
- `VITE_SITE_ENV=staging`

---

## 📝 Development Workflow

### **Making Changes:**

1. **Switch to staging branch:**
   ```bash
   git checkout staging
   ```

2. **Make your changes**

3. **Test locally:**
   ```bash
   npm run dev
   ```

4. **Build and deploy to staging:**
   ```bash
   npm run deploy:staging
   ```

5. **Test on staging site**

6. **When ready, merge to production:**
   ```bash
   git checkout master
   git merge staging
   git push origin master
   ```

7. **Deploy to production:**
   ```bash
   npm run deploy:production
   ```

---

## 🔧 Available Scripts

### **Build Scripts:**
- `npm run build` - Standard build
- `npm run build:staging` - Build for staging environment
- `npm run build:production` - Build for production environment

### **Deploy Scripts:**
- `npm run deploy:staging` - Deploy to staging
- `npm run deploy:production` - Deploy to production

### **Development:**
- `npm run dev` - Local development server
- `npm run preview` - Preview production build locally

---

## 🌍 Environment Configuration

### **Environment Detection:**
The app automatically detects which environment it's running in:

- **Production**: `your-production-domain.com`
- **Staging**: `your-staging-domain.com`
- **Development**: `localhost:5173`

### **Environment-Specific Features:**

#### **Production:**
- ✅ Analytics enabled
- ❌ Debug mode disabled
- ✅ Full performance optimizations

#### **Staging:**
- ❌ Analytics disabled
- ✅ Debug mode enabled
- ✅ Development features enabled

#### **Development:**
- ❌ Analytics disabled
- ✅ Debug mode enabled
- ✅ Hot reload enabled

---

## 🔄 Deployment Process

### **Staging Deployment:**
```bash
# 1. Make sure you're on staging branch
git checkout staging

# 2. Make your changes
# ... edit files ...

# 3. Commit changes
git add .
git commit -m "Add new feature"

# 4. Push to staging
git push origin staging

# 5. Deploy to staging
npm run deploy:staging
```

### **Production Deployment:**
```bash
# 1. Switch to master branch
git checkout master

# 2. Merge staging changes
git merge staging

# 3. Push to production
git push origin master

# 4. Deploy to production
npm run deploy:production
```

---

## 🎯 Best Practices

### **Before Deploying to Production:**
- [ ] Test all changes on staging
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test with different browsers
- [ ] Check performance
- [ ] Review analytics (if applicable)

### **Code Quality:**
- [ ] Run linter: `npm run lint`
- [ ] Format code: `npm run format`
- [ ] Test locally: `npm run dev`
- [ ] Build test: `npm run build`

---

## 🆘 Troubleshooting

### **Common Issues:**

#### **Build Fails:**
```bash
# Clear cache and rebuild
rm -rf node_modules .svelte-kit
npm install
npm run build
```

#### **Deployment Fails:**
```bash
# Check Vercel logs
vercel logs

# Redeploy
vercel --prod
```

#### **Environment Issues:**
- Check environment variables in Vercel dashboard
- Verify branch settings
- Ensure correct domain configuration

---

## 📊 Monitoring

### **Production Monitoring:**
- Vercel Analytics
- Error tracking
- Performance monitoring
- Uptime monitoring

### **Staging Monitoring:**
- Build status
- Preview URLs
- Test results

---

## 🔗 Quick Commands Reference

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build for current environment
npm run preview               # Preview build locally

# Staging
git checkout staging          # Switch to staging branch
npm run build:staging         # Build for staging
npm run deploy:staging        # Deploy to staging

# Production
git checkout master           # Switch to production branch
npm run build:production      # Build for production
npm run deploy:production     # Deploy to production

# Git workflow
git add .                     # Stage changes
git commit -m "message"       # Commit changes
git push origin <branch>      # Push to remote
git merge staging             # Merge staging to master
```

---

**Happy Deploying! 🚀** 